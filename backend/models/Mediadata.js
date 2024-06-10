const mongoose=require('mongoose')
const Schema=mongoose.Schema

const mediaSchema=new Schema({
    url:{
        type:String,
        required:false
    }
    
   

})

module.exports=mongoose.model('Media',mediaSchema)

