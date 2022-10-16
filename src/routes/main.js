
const {detail,slider,service}=require('../../models/index')

const routes=(app)=>{
    app.get('/project',(req,res)=>{
        res.send('aman is best developer')
    })
    app.get('/',(req,res)=>{
        res.send('aman is best developer and get an job of 12 lpa in december 2022')
        console.log('running')
    })
    app.get('/ind',async(req,res)=>{
      const result=await detail.findOne({where:{id:3} })
      const okkk=await slider.findAll()
      const aman=await service.findAll()
      

     res.render("index",{
            result:result,
            okkk:okkk,
            aman:aman
        })
        console.log('running ok')
    })
}
module.exports=routes;