const Cart=require('../models/Cartdata')
const mongoose=require('mongoose')
//all get prods



//create new prod

const createCart=async(req,res)=>{
const {userid}=req.body

try{
    const productz=await Cart.create({userid})
    res.status(200).json(productz)
}
catch(error){
    res.status(400).json({error:error.message})
}

}

// //get product

// const getprod=async(req,res)=>{
//     const productf=await Product.find({})

//     res.status(200).json(productf)
// }

//get single product

const getperticularcart=async(req,res)=>{

    // const { id }=req.params

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error:'no such data'})
    // }
    const pertprod=await Cart.find({})
    if(!pertprod){
        return res.status(404).json({error:'no data'})
    }
    res.status(200).json(pertprod)
}

const updateCart=async(req,res)=>{
    // const { id }=req.params
    const {userid,cart}=req.body
    // if(!mongoose.Types.ObjectId.isValid(userid)){
    //     return res.status(404).json({error:'no such data'})
    // }
    const user=await Cart.findOneAndUpdate({userid:userid},{
        ...req.body
    })
    if(!user){
        return res.status(404).json({error:'no data'})
    }
    res.status(200).json(user)
}

module.exports={
    createCart,
    updateCart,
    getperticularcart
}