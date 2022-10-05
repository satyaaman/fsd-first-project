const categorycontroller=require('../controller/category.controller');

const routes=(app)=>{
    app.get('/2-20september/api/v1/category',categorycontroller.getcategory);

    app.post('/2-20september/api/v1/category',categorycontroller.createcategory);

    app.get('/2-20september/api/v1/category/byname/',categorycontroller.getcategorybyname);

    app.put('/2-20september/api/v1/category/:id',categorycontroller.updatecategory);
}
module.exports=routes;