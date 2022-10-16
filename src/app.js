const express= require('express');
const projectRoutes=require('./routes/main');
const hbs=require('hbs');
const {detail, sequelize,slider,service}=require('../models/index');

const app=express();
projectRoutes(app);

app.use('/static',express.static("public"))



app.set('view engine','hbs')
app.set("views" , "views")
hbs.registerPartials("views/partials")

// const data=[{
//     icon: "fab fa-accusoft",
//     title: "Provided best courses",
//     descrition: "Lorem ipsum, dolor sit amet consectetur . Ducimus reprehenderit veniam sequi.",
//     linktest: '#!',
//     link: 'Check'
// },{
//     icon: "fab fa-accusoft",
//     title: "Provided best courses",
//     descrition: "Lorem ipsum, dolor sit amet consectetur . Ducimus reprehenderit veniam sequi.",
//     linktest: '#!',
//     link: 'Check'
// },{
//     icon: "fab fa-accusoft",
//     title: "Provided best courses",
//     descrition: "Lorem ipsum, dolor sit amet consectetur . Ducimus reprehenderit veniam sequi.",
//     linktest: '#!',
//     link: 'Check'
// },{
//     icon: "fab fa-accusoft",
//     title: "Provided best courses",
//     descrition: "Lorem ipsum, dolor sit amet consectetur . Ducimus reprehenderit veniam sequi.",
//     linktest: '#!',
//     link: 'Check'
// }]

// const result= service.bulkCreate(data)
// console.log(result)


app.listen(5555, async ()=>{
   
    console.log('server started')
})