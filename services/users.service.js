
// const {user,role}=require('../models/index');
const {user}=require('../models/index')
var bcrypt = require('bcryptjs');
var jwt=require('jsonwebtoken');

require('dotenv').config();

const getuserbyemail=async(data)=>{
    
//         var salt = bcrypt.genSaltSync(10);
// var hashpassword = bcrypt.hashSync(data.password, salt);
    const response= await user.create({
        username:data.username,
        email:data.email,
        password:data.password,
    })
    return response;
}

const verifyemail=async(data)=>{
    const response=await user.findOne({
        where:{
            email:data
        }
    })
    return response;

}
const verifypassword=async(password,hashpassword)=>{
    
        const response=await bcrypt.compareSync(password,hashpassword);
        return response;

    }
const verifytoken=async(token)=>{
    try{
        const response=jwt.verify(token,process.env.mysecretkey);
    return response;
}
catch(err){
    console.log(err);
}

}



    

module.exports={
    getuserbyemail,
    verifyemail,
    verifypassword,
    verifytoken,
    
}