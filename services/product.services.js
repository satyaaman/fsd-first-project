const {product,category} = require("../models/index")


const getallproduct=async(req,res)=>{
    const response= await product.findAll({include:category});
    return response;

}
const createproduct=async(data)=>{
    const response=await product.create({
        name:data.name,
        cost:data.cost,
        describe:data.describe,
        categoryid:data.categoryid

    });
    return response;
}
const getproductbycategory=async(categoryid)=>{
    const response= await product.findAll({
        where:{
            categoryid:categoryid
        }
    });
    return response;
}


module.exports={
    getallproduct,
    createproduct,
    getproductbycategory
}