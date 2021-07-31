const User = require('../models/user.model');

exports.register = async (req, res, next) => {
   try {
      const data = await User.create(req.body);
      
      res.status(200).send({
         status: "succes",
         code: 200,
         data: data,
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
};

exports.authenticate = async (req, res) => {
   try {
     const { email, password } = req.body;
     const user = await User.findOne({ email });
     if (!user) {
       return res.status(400).json({ error: "User not found" });
     }
     if (!(await user.compareHash(password))) {
       return res.status(400).json({ error: "Invalid password" });
     }
     return res.json({
       user,
       token: user.generateToken()
     });
   } catch (err) {
     return res.status(400).json({ error: "User authentication failed", message: err.message});
   }
 }





