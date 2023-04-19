
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const cartSchema = new Schema({
  cartId: {
    type: String,
  },
  products: [
    {
      no: {
        type: String,
      },
      name: {
        type: String,
      },
      image: {
        type: String,
      },
      description: {
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