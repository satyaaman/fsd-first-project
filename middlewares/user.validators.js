const { verifytoken } = require('../services/users.service');

const {getuserbyemail}=require('../services/user.helper.service');

const roleservice=require('../services/role.service')
//const {getrolebyid}=require('../services/role.service')

const isauthenticated=async(req,res,next)=>{

    const token=req.headers['x-access-token'];

    if(!token){
        try{
        return res.json({
            message:'jwt token is missing',
            code:401,
            err:'invalid argument in request header'
        });
    }catch(err){
        console.log(err);
    }
    }
try{
    const response=await verifytoken(token);
    if(!response){
        return res.json({
            message:'jwt token is wrong',
            code:401,
            err:'invalid argument in request header'
        });

    }

    const user= await getuserbyemail(response.email);
    if(!user){
        return res.json({
            message:'jwt token is send for invalid user',
            code:401,
            err:'invalid argument in request header'
        });
    } 
    req.user=user;
}
catch(err){
    console.log(err);
}
  next();
}

const checkadmin=async(req,res,next)=>{
    try{
    const User=await req.user;
    const Role=await roleservice.getRolebyId(1);
  
    const isadmin=await User.hasRole(Role);
    if(!isadmin){
        return res.json({
            message:'user is not admin',
            code:401,
            err:'invalid admin'
        });
    }
    next();

    
   }catch(err){
    console.log(err);
   }
}
const checkadminbyName=async(req,res,next)=>{
    try{
    const User=await req.user;
    const Role=await roleservice.getRolebyName('admin');
  
    const isadmin=await User.hasRole(Role);
    if(!isadmin){
        return res.json({
            message:'user is not admin',
            code:401,
            err:'invalid admin'
        });
    }

    next();
   }catch(err){
    console.log(err);
   }
}



module.exports={
    isauthenticated,
    checkadmin,
    checkadminbyName
}