const express=require("express");
const { connection } = require("./db");
const { userRouter } = require("./Routes/user.routes")
const {auth}=require("./Middlewares/auth.middleware")
require('dotenv').config()


const app=express();
app.use(express.json());

app.use("/users",userRouter)
app.use("/users",auth)

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Welcome"})
})




app.listen(process.env.PORT, async()=>{
    try{
        await connection
        console.log("Connected to the DB.")
    }catch(err){
        console.log(err)
        console.log("Something went wrong.")
    }
    console.log(`Server running on ${process.env.PORT}`)
})












