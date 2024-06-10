const express=require('express')
const Product=require('./models/Userdata')
const {
    createUser,getuser,getperticularuser,updateUser
}=require('./controller/userController')

const router=express.Router()



router.get('/',getuser)

router.post('/',createUser)

router.get('/:id',getperticularuser)

router.patch('/:id',updateUser)

module.exports=router