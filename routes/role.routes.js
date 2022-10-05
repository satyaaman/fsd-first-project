const rolecontroller=require('../controller/role.controller');
const uservalidator=require('../middlewares/user.validators');

const routes=(app)=>{
   

    app.post('/users/api/v1/assignrole/addingrole',uservalidator.isauthenticated,/*uservalidator.checkadmin*/uservalidator.checkadminbyName,rolecontroller.addRoleToUser);
    
    app.delete('/users/api/v1/assignrole/deleteRole',uservalidator.isauthenticated,rolecontroller.deleteroletouser);
}
module.exports=routes;