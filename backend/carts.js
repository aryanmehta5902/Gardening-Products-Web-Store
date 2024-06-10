const express=require('express')
// const Product=require('./models/Productdata')
const {
    createCart,getperticularcart,updateCart
}=require('./controller/cartController')

const router=express.Router()

router.post('/',createCart)

router.patch('/',updateCart)

router.get('/',getperticularcart)

module.exports=router