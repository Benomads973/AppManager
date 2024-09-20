const User = require('../models/User');

function toJSON(data) {
    let tmp = Object.assign({}, data);
    Object.keys(data)
        .filter(d => /^_.*$/i.exec(d.toString()))
        .forEach(k => delete tmp[k])
        
    return tmp
}
  
exports.sendToMongo = async (req, res, next) => {
    
    try {
        console.log(req.body.username)
        const newUser = new User({ 
            appname: req.body.appname,
            username: req.body.username,
            password: req.body.password,
            org: req.body.org, 
            logo: ""
        });

        await newUser.save()
        
        let usr = await User.findOne({ username: req.body.username });
        usr=toJSON(usr.toJSON())

        delete usr['password']

        return res.status(201).json({ "message": 'User added successfully', data: usr }); 
    } catch (error) {
        return res.json({message : error || error.message})
    }
};
