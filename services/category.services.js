const {category}=require('../models/index');

const getcategory=async()=>{
    const response=await category.findAll();
    return response;
}

const createallcategory=async(data)=>{
    const response=await category.create({
        name:data.name,
        cost:data.cost,
        describe:data.describe

    });
    return response;
}
const getcategorybyname=async(namedata)=>{
    const response=await category.findAll({
        where:{
            name:namedata
        }
    });
    return response;
}

const updatecategory=async(id,data)=>{
    const response=await category.update(
        {
        name:data.name,
        cost:data.cost,
        describe:data.describe,
    },
    {
        where:{
        id:id
      }
    });
      return response;
}

module.exports={
    getcategory,
    createallcategory,
    getcategorybyname,
    updatecategory
}