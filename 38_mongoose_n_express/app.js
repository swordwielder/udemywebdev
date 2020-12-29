const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const categories = ['fruits','vegetables','dairy']
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
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

//Farm routes
// app.get('/farms', async (req,res) => {
//   const farms = Farm.find({});
//   res.render('farms/index', {farms})
// })

// app.get('farms/new', (req,res) => {
//   res.render('farms/new')
// })

// app.post('/farms', async (req,res) => {
//   const farm = new Farm(req.body);
//   await farm.save()
//   res.redirect('/farms')
//   //res.send(req.body)
// })


//products routes

app.get('/products', async (req,res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category })
  } else {
    const products = await Product.find({})
    res.render('products/index', { products, category: 'All'})
  }
  // const products = await Product.find({})
  // console.log(products)
  // res.send('all products')
})

app.get('/products/new', (req,res) => {
  res.render('products/new', {categories})
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

app.get('/products/:id/edit', async (req,res) => {
  const {id} = req.params;
  const product = await Product.findById(id)
})

app.put('/products/:id', async (req,res) => {
  const {id} = req.params;
  const product = await Product.findByIdAndUpdate(id,req.body, {runValidators: true, new:true})
  res.redirect(`/products/$/${product._id}`)
  
})

app.delete('/products/:id', async (req,res) => {
  const {id} =req.params;
  const deleted = await Product.findByIdAndDelete(id)
  res.redirect('/products')
})

app.listen(3000, () => {
    console.log('listening')
})