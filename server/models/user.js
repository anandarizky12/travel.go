const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
   
    {

        username: { type: String, required: true },
        email:{
            type : String,
            required : [true, "Please provide email"],
            unique : true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please input  a valid E-mail"
            ],
        },
        password: { 
            type: String, 
            required: true,
            minLength : 6,
            selected : false,
        },
        address : { type: String, default : "-", required: false },
        phone : { type : String, default : null },
        profile : {type : String, required : false, default : null},
        admin: { type: Boolean, default: false, required: true }

    }, { timestamps: {} }
);


//if the password modified then hash the password
userSchema.pre("save", async function(next){
        
        if(!this.isModified("password")){
            next();
        };

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();

});

// Load hash from your password DB.
userSchema.methods.matchPasswords = async function(passwordFromClient){
    
    return await bcrypt.compare(passwordFromClient, this.password);

};

//to get token when register and login
userSchema.methods.getSignedToken = function(){

    return jwt.sign({id:this._id},process.env.JWT_SECRET);

};

const userModel = mongoose.model('user', userSchema, 'user');

module.exports = userModel;