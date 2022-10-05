const validatecreate=(req,res,next)=>{
    try{
        if(!req.body.name){
            return res.json({
                message:'category nme is missing',
                code:400,
                err:'name parameter is missing'
            })
        }
        next();

    }catch(err){
        console.log(err);
    }
   
}
module.exports={
    validatecreate
}