const ordercontroller=require('../controller/order.controller');

const routes=(app)=>{
    app.post('/amazon/api/v1/product',ordercontroller.addproduct);

}
module.exports=routes;
