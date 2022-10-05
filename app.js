const categroryroutes=require('./routes/category.routes');
const productroutes=require('./routes/product.routes');
const userroutes=require('./routes/user.routes');
const roleroutes=require('./routes/role.routes')
const express=require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const {user,role}=require('./models/index')

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const port=2222;

categroryroutes(app);
productroutes(app);
userroutes(app);
roleroutes(app);

app.listen(port,async()=>{
    await sequelize.sync();

    // const myuser=await user.create({
    //     username:'chotu',
    //     email:'chotu@gmail.com',
    //     password:'chotuchotu'
    // })
    // const myrole=await role.findOne({
    //     where:{
    //         name:'seller',
    //     }
    // })
    // const response=await myuser.addRole(myrole);
    // console.log(response);

    console.log('server is running on port',port);
})