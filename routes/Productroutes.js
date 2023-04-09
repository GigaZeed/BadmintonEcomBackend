const express = require('express');
const app = express();

const ProductRoute = express.Router();
let Product = require('../model/Product');

//Add book
ProductRoute.route('/add-product').post((req,res,next)=>{
    Product.create(req.body,(error,data) =>{
        if(error){
            return next(error);
        } else{
            res.json(data)
        }
    })
})
//Get All Product
ProductRoute.route('/').get((req,res) =>{
    Product.find((error,data) =>{
        if(error){
            return next(error);
        }else{
            res.json(data)
        }
    })
})
//Get one Product
ProductRoute.route('/product/:id').get((req,res) =>{
    Product.findById(req.params.id,(error,data) =>{
        if(error){
            return next(error);
        }else{
            res.json(data)
        }
    })
})

//UUpdate Product
ProductRoute.route('/update-product/:id').put((req,res,next)=>{
    Product.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
        if(error){
            return next(error);
            console.log(error);
        }else{
            res.json(data);
            console.log('Product Updated Complete');
        }
    })
})
//Delete Product 
ProductRoute.route('/delete-product/:id').delete((req,res,next) =>{
    Product.findByIdAndRemove(req.params.id,(error,data) =>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg:data
            });
        }
    })
})

module.exports = ProductRoute;