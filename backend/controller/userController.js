const User=require('../models/Userdata')
const Cart=require('../models/Cartdata')
const mongoose=require('mongoose')
//all get user



//create new user

const createUser=async(req,res)=>{
const {name,dateofbirth,emailid,password,address,cart}=req.body
const userid=("" + Math.random()).substring(2, 8)
try{
    const userz=await User.create({userid,name,dateofbirth,emailid,password,address,cart})
    // const cartz=await Cart.create({userid})
    res.status(200).json(userz)
    
    
}
catch(error){
    res.status(400).json({error:error.message})
}

}

//get user

const getuser=async(req,res)=>{
    const userf=await User.find({})

    res.status(200).json(userf)
}

//get single user

const getperticularuser=async(req,res)=>{

    const { id }=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such data'})
    }
    const pertuser=await User.findById(id)
    if(!pertuser){
        return res.status(404).json({error:'no data'})
    }
    res.status(200).json(pertuser)
}

const updateUser=async(req,res)=>{
    const { id }=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such data'})
    }
    const user=await User.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!user){
        return res.status(404).json({error:'no data'})
    }
    res.status(200).json(user)
}


module.exports={
    createUser,
    getuser,
    getperticularuser,
    updateUser
}