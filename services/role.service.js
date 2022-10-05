
const {user,role}=require('../models/index')

const addRoleToUser=async(userId,roleId)=>{
    const User= await user.findOne({
        where:{
            id:userId,
        }
    })
    const Role= await role.findOne({
        where:{
            id:roleId
        }
    });

    await User.addRole(Role);
    return User;

}

const deleteRoleToUser=async(userId,roleId)=>{
    const User= await user.findOne({
        where:{
            id:userId,
        }
    })
    const Role= await role.findOne({
        where:{
            id:roleId
        }
    });

    await User.removeRole(Role);
    return User;
}

const getRolebyId=async(id)=>{
    try{
        const response=await role.findByPk(id);
        return response;

    }catch(err){
        console.log(err);
    }
    
}
const getRolebyName=async(rolename)=>{
    try{
        const response=await role.findOne({
            where:{
                name:rolename
            }
        });
        return response;

    }catch(err){
        console.log(err);
    }
    
}
module.exports={
    addRoleToUser,
    deleteRoleToUser,
    getRolebyId,
    getRolebyName
}
