const RegisterLogic=(req,res,next)=>{
    const {name, email, password}=req.body;
    if (name && email && password){
     next();
    }else{
        res.status(404).json({message:"Fill all entered fields"})
    }
}

module.exports={RegisterLogic}