const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
  cartproducts: [
    {
      name: {
        type: String,
      },
      pic: {
        type: String,
      },
      descript: {
        type: String,
      },
      price: {
        type: String,
      },
      qty: {
        type: String,
      },
      total: {
        type: String,
      },
    },
  ],
  totalall: {
    type: String,
  },
})

const Cart = mongoose.model('carts', cartSchema)
module.exports = Cart