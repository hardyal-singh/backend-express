const UserModel=require("../models/UserModel");


const UserLogin=async (req,res)=>{
const {email, password}=req.body;
try{
    const  Userdata=await UserModel.find({email});
    if (Userdata.password===password){
     res.status(200).json({message:"Login successfully,Enjoy"})
    }else{
        res.status(404).json({message:"Please register your account "})
    }
}catch{
    res.status(404).json({message:"Pleaser try again"})
}
}

const UserRegister=async(req,res)=>{
    const {name, email,password}=req.body;
    try{
        let data=await UserModel.create({name,email,password})
        res.status(200).json({message:"user created successfully", data})
    }catch{
        res.status(404).json({message:"Please try again"})
    }
}

const UserGet=async (req, res)=>{
    const query=req.params.email;
    try{
     let data= await UserModel.find({email:query})
     console.log(data)
     res.status(200).json(data)
    }catch{
        res.status(400).json({message:"Error Please try again"})
        console.log("error")
    }
}



module.exports={UserRegister, UserLogin,UserGet}