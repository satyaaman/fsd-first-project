const categoryservice=require('../services/category.services')

const getcategory=async(req,res)=>{
    const response=await categoryservice.getcategory();
    return res.json({
        message:"ssucccesfully fetched the category",
        code:200,
        success:true,
        data:response
    });
}

const createcategory=async(req,res)=>{
    const response=await categoryservice.createallcategory(req.body);
    return res.json({
        message:"ssucccesfully created the category",
        code:201,
        success:true,
        data:response
    })
}
const getcategorybyname=async(req,res)=>{
    const response=await categoryservice.getcategorybyname(req.query.name);
    return res.json({
        message:"ssucccesfully created the category",
        code:201,
        success:true,
        data:response
    })
}
const updatecategory=async(req,res)=>{
    const response=await categoryservice.updatecategory(req.params.id,req.body);
    return res.json({
        message:"ssucccesfully updated the category",
        code:201,
        success:true,
        data:response
    })
}

module.exports={
    getcategory,
    createcategory,
    getcategorybyname,
    updatecategory
}