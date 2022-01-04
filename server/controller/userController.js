const userModel = require('../models/user');


const sendUserData = (user, statusCode, res)=>{
   
    const token = user.getSignedToken();
   
    res.status(statusCode).send({
            success :true, token ,
            userData : {
                         'id'       : user._id,
                         'username' : user.username,
                         'email'    : user.email,
                         'address'  : user.address,
                         'phone'    : user.phone,
                         'profile'  : user.profile,
                         'admin'    : user.admin,
                        }
           
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

            sendUserData(user, 200, res);
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
          
            return res.status(401).send({message : "The email and password you entered did not match our records. Please double-check and try again."});

        }

        const match = await user.matchPasswords(password);


        if(!match){

            return res.status(401).send({message : "Sorry, password you entered did not match our records. Please double-check and try again."});

        }

        sendUserData(user, 200, res);
     
    } catch (error) {

        res.status(500).send({message : "Sorry failed to login, Code : 500"});
        console.log(error);

    }
}


const getUser = async (req ,res ) => {

    const {id}= req.params;

    try{
        const user = await userModel.findById(id);

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
};

const updateUser = async (req, res) => {

    try{
          
        const {id, username, email ,address, phone } = req.body;

        const user = await userModel.findById( id );

        if(user){
        
            if(req.files){
                const { profile } = req.files;
                const imageProfileName = profile.name;
                await profile.mv(`./images/${imageProfileName}`);

                user.profile = imageProfileName
            }
            user.username = username;
            user.email = email;
            user.address = address;
            user.phone = phone;

            const updateUser = await user.save();

            if(updateUser){

                sendUserData(updateUser, 200, res);

            }   

        }
    }catch(error){
        
        console.log(error);
        return res.status(500).send({message : "failed to update user"})

    }

};

const checkAdmin = async (req, res) => {
    try{

        user = req.user
        console.log(user)
        // res.status(200).json({
        //     message: "get data User success",
        //     data: user,
        //     })
    }catch(err){
        console.log(err)
    }
}



module.exports = {register, login, getUser, updateUser, checkAdmin};