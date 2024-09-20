// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const uuid = require("uuid");


const router = express.Router();
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,  path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, uuid.v4().toString() + '-' + file.originalname);
        } else {
            cb("Type file is not access", false);
        }
   // cb(null, uuid.v4().toString() + '-' + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter,
  limits: 1024 * 1024 * 5
});

// upload.single('logo'),
router.post('/register', upload.single('logo'),async (req, res) => {
  const { username, password, org, appname } = req.body;
  const logo = req.file.originalname;
  try {
    const user = new User({ username, password, org, logo, appname });
    await user.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('User not found');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
apt-get update -y
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
 
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
apt-key fingerprint 0EBFCD88
 
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
apt-get update -y
apt-get install -y docker-ce
 
usermod -aG docker $USER