const express=require("express");
const {noteModel}=require("../Models/note.model")
const noteRouter=express.Router();
const jwt = require('jsonwebtoken');


noteRouter.post("/create", async(req,res)=>{
    // const {token}=req.query;
//   try{
//      const book=new bookModel(req.body)
//      await book.save()
//      res.status(200).json({"msg":"note added", "addedNote": req.body })
//   }catch(err){
//      res.status(400).json({"error":err.message})
//   }
})

noteRouter.get("/read", async (req,res)=>{
    
//    try{
//          const books=await bookModel.find()
//             res.status(200).json({msg:"All the notes present in the database"})
    
//    }catch(err){
//     res.status(400).json({"error":err.message})
//    }
})

noteRouter.patch("/update/:id",  async (req,res)=>{
//    const {id}=req.params;
//    try{
//      await bookModel.findByIdAndUpdate({_id:id},req.body)
//      res.status(200).json( {"msg":"Book has been updated"})
//    }catch(err){
//     res.status(400).json({"error":err.message}) 
//    }
})

noteRouter.delete("/delete/:id", async (req,res)=>{
    // const {id}=req.params;
    // try{
    //   await bookModel.findByIdAndDelete({_id:id})
    //   res.status(200).json( {"msg":"Book has been deleted"})
    // }catch(err){
    //  res.status(400).json({"error":err.message}) 
    // }
})





module.exports={
    noteModel
}