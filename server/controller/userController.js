const userModel = require('../models/user');


const sendToken = (user, statusCode, res)=>{
    const token = user.getSignedToken();
    res.status(statusCode).json({
            success :true,token
    })
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

}



module.exports = {register};