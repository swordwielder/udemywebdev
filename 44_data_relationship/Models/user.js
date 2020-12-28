const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationships', {useNewUrlParser: true,  useUnifiedTopology: true })
.then(() => {
  console.log("mongo connected!!")
})
.catch(err  =>  {
  console.log('connection error mongo ERR!!!!!!!!!!')
  console.log(err)
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {
            _id: { id: false },
            street:String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.address.push({
        street: '123 sesame street',
        city: 'new york',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)

}

makeUser();