const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user");

const isAuth = async (req, res , next)=>{
    
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){

        token = req.headers.authorization.split(' ')[1];
    }


    if(!token){

        return res.status(401).send({message : "Not authorized to acces this route"});

    }


    try {
        
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;
        next();

    } catch (error) {

      console.log(error);  
      return res.status(400).send({message: "Invalid token" });
 
    
    }

} 




const isAdmin = async (req, res, next) => {

    let token;

    if(
        !req.headers.authorization &&
        !req.headers.authorization.startsWith("Bearer") 
    ){
        token = req.headers.authorization.split(" ")[1];
    };

    if(!token){

        return res.status(401).send({message : "Not Authorize to access this route"});

    }

    try {

        const decode = jwt.verified(token, process.env.JWT_SECRET);
        const user = await userModel.findOne(decode.id);

        if(user.admin != true){

            return res
                .status(400)
                .send({message : "Invalid Operation"});                     
            next();
        }

    } catch (error) {

        console.log(error)
        return res.status(400).send({message : "Invalid Token"});
    }

};

module.exports = {isAuth, isAdmin}