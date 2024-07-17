const SignUpModel = require("../Models/SignupSchema");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const SECRET_KEY = "kyahaalhai";

exports.createUser = async (req, res) => {
    const { email, username, password } = req.body;
   
    console.log("Received data:", req.body);
    try {
        const newpassword = await bcrypt.hash(password ,10);
        const response = await SignUpModel.create({
            email : email,
            username : username,
            password : newpassword
        });
        res.status(201).send({ Message: "user create success",response });
    } catch (error) {
        res.status(501).send({ Message: "problem: " + error });
    }
}

exports.userLogin = async (req, res) =>{
    const { email , password } = req.body;
    try{
        const response = await SignUpModel.findOne({email:email})
        if(response){
            const pass = response.password;
            const check = await bcrypt.compare(password , pass);
            if(check == true){
                const token = jwt.sign({ email: response.email, id: response._id }, SECRET_KEY, { expiresIn: '1h' });
                return res.status(200).json({Message: "welcome", token})
            }
        }
        res.status(401).json({ Message: "Invalid email or password" });
    }catch(error){
        res.status(501).json({Message:"something went wrong"})
    }
};


exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).send({ Message: "No token provided" });
    }
  
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(500).send({ Message: "Failed to authenticate token" });
      }
      req.userId = decoded.id;
      next();
    });
  };

