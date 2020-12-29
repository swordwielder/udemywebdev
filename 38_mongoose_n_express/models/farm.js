const mongoose = require('mongoose');
const {Schema} = mongoose;


const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'farm have to have a name']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products:[
        {
            type:Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]

})





