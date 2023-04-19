const express = require('express');
const Cart = require('../model/Cart');
const CartRoute = express.Router();

CartRoute.route('/addcart').post((req,res,next)=>{
    Cart.create({
        cartproducts: req.body.cart.cartproducts.map((product) => ({
          name: product.name,
          pic: product.pic,
          descript: product.descript,
          price: product.price,
          qty: product.qty,
          total: product.total
        })),
        totalall: req.body.cart.totalall
      }).then(result => {
        console.log(result);
        // console.log(result.cart[0]);
        res.json(result);
      }).catch(err => {
        console.log(err);
        res.send({ err: "error ahhh" });
      });
})

module.exports = CartRoute;