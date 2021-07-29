const { findOne } = require('../models/user');
const userModel = require('../models/user');


const sendToken = (user, statusCode, res)=>{
   
    const token = user.getSignedToken();
   
    res.status(statusCode).send({
            success :true, token
    });

}

const register = async (req,res,next)=>{

    const {username, email, password, address} = req.body;

    try{
        
        const checkEmail = await userModel.findOne({ email });

        
        if(!checkEmail){
              const user = await userModel.create({
                    username, email, password, address
              });

            sendToken(user, 200, res);
        }

        res.status(400).send({message : 'Failed To Create Account, Email already Exist'})

    }catch(error){

        res.status(500).send({message : "failed to create the user account"});
        console.log(error)
    
    }

};


const login = async (req, res, next) => {

    const {email, password} = req.body;

    if(!email || !password){
        return  res.status(400).send({message : "Please Provide Email or Password"});
    };

    try {

        const user = await userModel.findOne({email}).select("+password");
        

        if(!user){

            return res.status(401).send({message : "Sorry Email or Password Invalid"});

        }

        const match = await user.matchPasswords(password);


        if(!match){

            return res.status(401).send({message : "Sorry, Invalid Password"});

        }

        sendToken(user, 200, res);
     
    } catch (error) {

        res.status(500).send({message : "Sorry failed to login, Code : 500"});
        console.log(error);

    }


}


const getUser = async (req ,res ) => {

    const {id}= req.params;

    try{
        const user = await userModel.findOne({_id:id});

        console.log(user)
        if(!user){
           return res.status(401).send({message : "invalid Id"});
        }
    
        return res.status(200).json({
            message: "get data User success",
            data: user,
          });
    }catch(error){

        console.log(error)
        return res.status(500).send({message : "Failed To get The data"})
    }
  



}



module.exports = {register, login, getUser};