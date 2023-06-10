const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  age:{type:Number},
  location:{type:String},
  pass:{type:String, required:true}
})



const userModel=mongoose.model("user",userSchema)



module.exports={
    userModel
}