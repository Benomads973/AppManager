// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const userRoutes = require('./routes/userRoutes');
// const userRoutes = require('./routes/user')

const routes = require('./routes')

const port = parseInt(process.env.APP_PORT) || undefined;

if (typeof port != 'number' || port >= 65535) {
  throw new Error('APP_PORT env variable is not defined')
}

mongoose.connect( process.env.MONGO_URL, {
  user: process.env.MONGO_USER, 
  pass: process.env.MONGO_PASSWORD,
})
.then(() => console.log('Node is register to the database'))
.catch(err => console.error(err))

const app = express();

app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Configuration de multer pour gérer les fichiers
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

app.use((_,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//app.use('/users', userRoutes);

app.use('/', routes);

app.listen(port, () => {
  console.log('Server is running on port 5000');
});
