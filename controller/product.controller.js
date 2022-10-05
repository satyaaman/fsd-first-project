const productservice=require('../services/product.services');

const getallproduct=async(req,res)=>{
    const response=await productservice.getallproduct();
    return res.json({
        message:"succesfully fetched the product",
        code:200,
        success:true,
        data:response
    })
}
const createproduct=async(req,res)=>{
    const response=await productservice.createproduct(req.body);
    return res.json({
        message:"succesfully created the product",
        code:200,
        success:true,
        data:response
    })
}

const getproductbycategory=async(req,res)=>{
    const response=await productservice.getproductbycategory(req.params.categoryid);
    return res.json({
        message:"succesfully fetched the product",
        code:200,
        success:true,
        data:response
    })
}
module.exports={
    getallproduct,
    createproduct,
    getproductbycategory
}