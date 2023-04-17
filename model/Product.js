const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id:{
        type: Number
    },
    name:{
        type: String
    },
    price:{
        type:Number
    },
    descript:{
        type:String
    },
    pic:{
        type:String
    }
},{
    collection: 'Products'
})

module.exports = mongoose.model('Product',Product)