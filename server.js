const express =require("express");
const app =express();
const dotenv=require("dotenv");
const cors =require("cors")

//import floder and files
const Databaseconnection=require("./config/config");
const {UserRouter} =require("./routes/UserRouter.js")

//environment variables for express server
dotenv.config()
const port =process.env.PORT

//middlewers 
app.use(express.json());
app.use(cors())
app.use("/", UserRouter);


app.listen(port ,async()=>{
    await Databaseconnection();
    console.log(`server started on port ${port }`)
})