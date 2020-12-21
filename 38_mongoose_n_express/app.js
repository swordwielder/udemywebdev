const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');

const Product = require('./models/product')
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => {
    console.log("mongo connected!!")
  })
  .catch(err  =>  {
    console.log('connection error mongo ERR!!!!!!!!!!')
    console.log(err)
  })


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


app.get('/products', async (req,res) => {
  const products = await Product.find({})
  console.log(products)
  res.send('all products')
})

app.get('/products/new', (req,res) => {
  res.render('products/new')
})

app.post('/products', async (req,res) => {
  const newproduct = new Product(req.body)
  await newproduct.save();
  res.redirect('/products')
  //res.send('making your product!')
  console.log(newProduct)
})

app.get('/products/:id', async (req,res) => {
  const {id} = req.params;
  const product = await Product.findById(id)
})

app.listen(3000, () => {
    console.log('listening')
})