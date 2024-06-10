const mongoose=require('mongoose')
const Schema=mongoose.Schema

const prodSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    
    qty:{
        type:Number,
        required:true
    },
    features:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    disccost:{
        type:Number
        
    },
    coverimg:{
        type:String,
        required:true
    },
    insideimg1:{
        type:String,
        required:true
    },
    insideimg2:{
        type:String
    },

    insideimg3:{
        type:String
    },
    insideimg4:{
        type:String
    }

})

module.exports=mongoose.model('Product',prodSchema)

