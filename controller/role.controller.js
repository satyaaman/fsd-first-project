
const roleservice=require('../services/role.service');

const addRoleToUser=async (req,res)=>{
    let response=await roleservice.addRoleToUser(req.body.userId, req.body.roleId);
    if(response){
        return res.json({
            message:"role is added successfully ",
            code:200,
            success:true,
            
        })
    }
    else{
        return res.json({
            message: 'error is here role not added ',
            success:false,
            code:400
        });
    }
}
const deleteroletouser=async (req,res)=>{
    let response=await roleservice.deleteRoleToUser(req.body.userId, req.body.roleId);
    if(response){
        return res.json({
            message:"role is removed successfully ",
            code:200,
            success:true,
            
        })
    }
    else{
        return res.json({
            message: 'error is here role not deleted',
            success:false,
            code:400
        });
    }
}

module.exports={
    addRoleToUser,
    deleteroletouser
}