const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    userid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    
    dateofbirth:{
        type:Date,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
        
    }

})

module.exports=mongoose.model('User',userSchema)

