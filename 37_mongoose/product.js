const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => {
    console.log("connected!!")
  })
  .catch(err  =>  {
    console.log('ERR!!!!!!!!!!')
    console.log(err)
  })

const productSchema = new mongoose.Schema({
    name: 
    {
        type: String,
        required: true
    },
    price: {
        type:Number,
        min: 0.01
    },
    categories: [String],
    onSale: {
        type: Boolean,
        default: false
    }
    
});

productSchema.methods.greet = function () {
    console.log("Hellow Hi howdy")
    console.log(`- from ${this.name}`)
}


const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike'});
    foundProduct.greet();
}


productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save()
}

productSchema.methods.addCategory = function (newCat){
    this.categories.push(newCat);
    return this.save();
}

const Product = mongoose.model('Product', productSchema)

const bike = new Product({name: 'mountain bike'})

bike.save()
    .then(data => {
        console.log('it works')
        console.log(data)
    })