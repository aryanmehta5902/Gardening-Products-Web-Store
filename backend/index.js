const connectToMongo=require('./db');
const prodroute=require('./prods')
const userroute=require('./user')
const cartroute=require('./carts')
const express = require('express')
const app = express()
const port = 7000

app.use(express.json())

app.use('/api/product',prodroute)
app.use('/api/user',userroute)
app.use('/api/cart',cartroute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

connectToMongo();