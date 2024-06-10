const express=require('express')
const Product=require('./models/Productdata')
const {
    createProduct,getprod,getperticularprod
}=require('./controller/prodController')

const router=express.Router()

router.post('/',createProduct)

router.get('/',getprod)

router.get('/:id',getperticularprod)

module.exports=router