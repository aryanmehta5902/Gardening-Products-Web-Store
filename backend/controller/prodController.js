const Product=require('../models/Productdata')
const Media=require('../models/Mediadata')
const mongoose=require('mongoose')
//all get prods


function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
//create new prod

const createProduct=async(req,res)=>{
const {title,qty,features,cost,disccost,coverimg,insideimg1,insideimg2,insideimg3,insideimg4}=req.body

try{
    const productz=await Product.create({title,qty,features,cost,disccost,coverimg,insideimg1,insideimg2,insideimg3,insideimg4})
    res.status(200).json(productz)
}
catch(error){
    res.status(400).json({error:error.message})
}

}

// get product

const getprod=async(req,res)=>{
    const productf=await Product.find({})
    
wait(3000);
    res.status(200).json(productf)
}

// const getprod = async (req, res) => {
//     try {
//         const productf = await Product.find({});
//         const productsWithImages = await Promise.all(productf.map(async (product) => {
//             const coverimg = await Media.findById(product.coverimg);
//             const insideimg1 = await Media.findById(product.insideimg1);
//             const insideimg2 = await Media.findById(product.insideimg2);
//             // You should return an object here, not individual properties
//             return {
//                 _id: product._id,
//                 title: product.title,
//                 qty: product.qty,
//                 features: product.features,
//                 cost: product.cost,
//                 coverimg: coverimg,
//                 insideimg1: insideimg1,
//                 insideimg2: insideimg2
//             };
//         }));
//         // Send the products with images as JSON response
//         res.status(200).json(productsWithImages);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

//get single product



const getperticularprod=async(req,res)=>{

    const { id }=req.params

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error:'no such data'})
    // }
    const pertprod=await Product.findOne({ uniname: new RegExp(id, 'i') })
    if(!pertprod){
        return res.status(404).json({error:'no data'})
    }
    wait(3000);
res.status(200).json(pertprod)
}

// const getperticularprod = async (req, res) => {
//     try {
//         const { id } = req.params;
        
//         const product = await Product.findOne({ uniname: new RegExp(id, 'i') });
//         const tryii=await Media.find({})
//         if (!product) {
//             return res.status(404).json({ error: 'Product not found' });
//         }

//         // Fetch images for the product
        
//         const coverimg = await Media.findById(product.coverimg);
//         const insideimg1 = await Media.findById(product.insideimg1);
//         const insideimg2 = await Media.findById(product.insideimg2);

//         // Construct the response object
//         const productWithImages = {
//             _id: product._id,
//             title: product.title,
//             qty: product.qty,
//             features: product.features,
//             cost: product.cost,
//             coverimg: coverimg,
//             insideimg1: insideimg1,
//             insideimg2: insideimg2
//         };

//         // Send the product with images as JSON response
//         res.status(200).json(tryii);
//     } catch (error) {
//         console.error('Error fetching particular product:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };



module.exports={
    createProduct,
    getprod,
    getperticularprod
}