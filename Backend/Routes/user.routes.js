const express=require("express");
const {userModel}=require("../models/user.model")
const userRouter=express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


userRouter.post("/register",async (req,res)=>{
    const {name,email,age,location,pass}=req.body;
    if(!/[A-Z]/.test(pass) || !/[0-9]/.test(pass) || !/[!@#$%^&*]/.test(pass) || pass.length < 8){
        return res.status(400).json({error:'Pass should contain atleast one uppercase character,one number,one special character,and be atleast 8 characters long.'})
    }
    try{
        bcrypt.hash(pass, 5, async (err, hash) => {
            if(err){
                res.status(400).json({error:err.message})
            } else {
                const user=new userModel({name,email,age,location,pass:hash})
                await user.save()
            }
        })
       res.status(200).json({"msg":"The new user has been registered", "registeredUser":req.body})
    } catch(err){
        if(err.code===11000){
           return res.status(400).json({error:"User with the same email already exists."})
        }
       res.status(400).json({"error":err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body;
    try{
        const user=await userModel.findOne({email})
        if(user){
            bcrypt.compare(pass, user.pass, (err, result) => {
                if(result){
                    var token = jwt.sign({ course: 'backend' }, 'masai', {expiresIn: '2m'});
                    // const refreshToken = jwt.sign({ course: 'backend' }, 'masai', {expiresIn: '5m'});
                    res.status(200).json({"msg":"Login successful!","token":token})
                } else {
                    res.status(400).json({"error":err.message})
                }
            });
            
            // , "token":, "refreshToken":
        } else {
            res.status(200).json({msg:"user not found"})
        }
    }catch(err){
        res.status(400).json({"error":err.message})
    }
})





module.exports={
    userRouter
}