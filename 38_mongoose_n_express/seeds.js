const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => {
    console.log("mongo connected!!")
  })
  .catch(err  =>  {
    console.log('connection error mongo ERR!!!!!!!!!!')
    console.log(err)
  })

const p = new Product ({
    name: 'grapefruit',
    price: 1.99,
    category: 'fruit'

})
p.save()
    .then( p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    });
