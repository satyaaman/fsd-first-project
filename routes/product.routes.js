const productroutes=require('../controller/product.controller');
const middlewaresvalidator=require('../middlewares/category.middlewares')
const uservalidator=require('../middlewares/user.validators');

const routes=(app)=>{
    app.get('/product/api/v1/getall',productroutes.getallproduct);

    app.post('/product/api/v1/createall',uservalidator.isauthenticated,middlewaresvalidator.validatecreate,productroutes.createproduct);

    //to get all the product using categoryid
    app.get('/produt/api/v1/productbycategory/:categoryid',productroutes.getproductbycategory);
    
}
module.exports=routes;