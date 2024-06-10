const mongoose=require('mongoose')
const Schema=mongoose.Schema

const cartSchema=new Schema({
    userid:{
        type:String,
        required:true
    },
    
    cart:{
        type:Array,
        required:false,
        default:[]
    }

})

module.exports=mongoose.model('Cart',cartSchema)

