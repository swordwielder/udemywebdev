const { Mongoose } = require("mongoose");






const personSchema = new Mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function (){
    return `${this.first} ${this.last}`
})


personSchema.pre('save', async function() {
    console.log('executes before the save')
    console.log('aboout to t save')
})

personSchema.post('save', async function(){
    console.log('just saved')
    console.log('executes after')
})

const Person = mongoose.model('Person', personSchema);

