const usercontroller=require('../controller/users.controller');
//const uservalidator=require('../middlewares/user.validators');

const routes=(app)=>{
    app.post('/users/api/v1/signup',usercontroller.getuserbyemail);

    app.post('/users/api/v1/signinuser',usercontroller.signinuser);

    //app.patch('/users/api/v1/assignrole/:userId',uservalidator.isauthenticated,usercontroller.addRoleToUser);
    
}
module.exports=routes;