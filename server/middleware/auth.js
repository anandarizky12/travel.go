const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const isAuth = async (req, res , next)=>{
    
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){

        token = req.headers.authorization.split(' ')[1];
    }

    console.log(req.headers)
    if(!token){

        return res.status(401).send({message : "Not authorized to acces this route"});

    }


    try {
        
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
                const user = await userModel.findById(decoded.id);
            
                if (!user) {
                  return next(new errorResponse("No user found with this id", 404));
                }
            
                req.user = user;
            
                // res.status(200).send({message:"Auth success"});
                
                next();
                
    } catch (error) {
      console.log(error)
      return res.status(400).send({message:error });
 
    
    }

} 



const isAdmin = async (req, res, next) => {
  let header, token;
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  )
    return res.status(401).send({
      error: { message: "Access denied" },
    });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(verified.id);
   
    if (user.admin !== true){
      return res
      .status(400)
      .send({ status: 400, message: "invalid operation" });
    }
 
    next();
  } catch (err) {
    console.log(err)
    res.status(400).send({
      error: { message: "Invalid token" },
    });
  }
};
module.exports = {isAuth, isAdmin}