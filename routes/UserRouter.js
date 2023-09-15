const express =require("express");
const UserRouter=express.Router();

//import controllers 
const {UserRegister, UserLogin,UserGet,UserGet01} =require("../controlers/UserControler")

//import midedleware
const {RegisterLogic} =require("../middleware/RegisterLogic")

//Routes
UserRouter.post("/register",RegisterLogic,UserRegister)
UserRouter.post("/login",UserLogin)
UserRouter.get("/getdata/:email", UserGet)



module.exports={UserRouter};