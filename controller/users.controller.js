const userservice=require('../services/users.service');
const jwt=require('jsonwebtoken');
require('dotenv').config();

const getuserbyemail=async(req,res)=>{
    const response=await userservice.getuserbyemail(req.body);
    return res.json({
        message:"succesfuuly signed up",
        code:200,
        success:true,
        data:response
    })

}
const signinuser=async(req,res)=>{

    const response=await userservice.verifyemail(req.body.email);
    if(!response){
        return res.json({
            message:"email is not correct",
            code:400,
            success:true,
            data:[]
        })
    }
    else{
        try{
            const correctpassword=await userservice.verifypassword(req.body.password,response.password);
        if(correctpassword){
            var token=jwt.sign({email:response.email,username:response.username,password:response.password},process.env.mysecretkey);
            return res.json({
                message:"password is correct so you are  signed up",
                code:200,
                success:true,
                data:response,
                token:token
            });
        }
        else{
            return res.json({
            message:"password is not correct",
            code:400,
            success:true,
            data:[]
        })

        }
        
        
    }catch(err){
        console.log(err);
    }

}
        
    
   
}

module.exports={
    getuserbyemail,
    signinuser,
    
}
