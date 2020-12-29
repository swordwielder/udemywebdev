const mongoose = require('mongoose');
const  {Schema } = mongoose;


mongoose.connect('mongodb://localhost:27017/relationships', {useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => {
    console.log("mongo connected!!")
    })
    .catch(err  =>  {
    console.log('connection error mongo ERR!!!!!!!!!!')
    console.log(err)
    })


const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }

});


// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
//     {name: 'Sugar watermelon', price: 3.99, season: 'Summer'},
//     {name: 'asparagus', price: 5.99, season: 'Spring'}
// ])
const userSchema = new Schema({
    username: String,
    age:Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User'}
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ 
        type: mongoose.Schema.Types.ObjectId
        ,ref: 'Product'
    }]
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);


const makeTweets = async () => {
    const user = new User({username: 'chickenfan99', age: 61})
    const tweet1 = new Tweet({ text: 'random i like turtles', likes: 0})
    tweet1.user = user;
    user.save()
    tweet1.save()
}

makeTweets()

// const Product = mongoose.model('Product', productSchema);
// const Farm = mongoose.model('Farm', farmSchema);

// // const makeFarm = async () => {
// //     const farm = new Farm({ name: 'full Belly Farms', city: 'Guinda, CA'})
// //     const melon = await Product.findOne({ name: 'Goddess Melon'})
// //     farm.products.push(melon)
// //     await farm.save()
// //     console.log(farm)
// // }

// // makeFarm();

// const addProducts = async () => {
//     const farm = await Farm.findOne({ name: 'full Belly Farms'});
//     const watermelon = await Product.findOne({ name: 'Sugar watermelon'})
//     farm.products.push(watermelon)
//     await farm.save();
//     console.log(farm);
// }

// // addProducts()

// Farm.findOne({name: 'full Belly Farms'})
// .populate('products')
// .then(farm => console.log(farm))

