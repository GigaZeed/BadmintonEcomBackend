const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name:{
        type: String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    pic:{
        type:String
    }
},{
    collection: 'Products'
})

module.exports = mongoose.model('Product',Product)