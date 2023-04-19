const express = require('express');
const Cart = require('../model/Cart');
const CartRoute = express.Router();

CartRoute.route('/addcart').post((req,res,next)=>{

    Cart.create(req.body).then(result=>{
        //console.log(req.body)
        console.log(result)
        res.json(result)
        }).catch(err=>{
        console.log(err)
        res.send({err:"error ahhh"})
    })
})

module.exports = CartRoute;