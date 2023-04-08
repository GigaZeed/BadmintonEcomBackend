const mongoose = required('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    name:{
        type: String
    },
    price:{
        type:String
    },
    description:{
        type:String
    }
},{
    collection: 'products'
})

module.exports = mongoose.model('Product',Product)