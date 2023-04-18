const express = require('express');
const app = express();

const ProductRoute = express.Router();
const Product = require('../model/Product');

//Add Product
ProductRoute.route('/add-product').post((req,res,next)=>{
    const latestProduct = Product.findOne({}, {}, { sort: { 'id': -1 } });
    const latestId = latestProduct ? latestProduct.id : '0'; // use '0' as default if no users exist yet
    const nextId = parseInt(latestId);

    Product.create(req.body).then(result=>{
        console.log(result,nextId)
        res.json(result)
        }).catch(err=>{
        console.log(err)
        res.send({err:"error ahhh"})
    })
})
//Get All Product Old
// ProductRoute.route('/').get((req,res) =>{
//     Product.find().then(result=>{
//         console.log(result)
//         res.json(result)
//         }).catch(err=>{
//         console.log(err)
//         res.send({err:"error ahhh"})
//         })
// })

//Get All Product Old

ProductRoute.route('/').get(async (req,res) =>{
    const result = await Product.find()
console.log(result)
res.json(result)
})
//Get one Product Old
// ProductRoute.route('/product/:id').get((req,res) =>{
//     Product.findById(req.params.id,(error,data) =>{
//         if(error){
//             return next(error);
//         }else{
//             res.json(data)
//         }
//     })
// })

//Get one Product
ProductRoute.route('/product/:id').get((req,res) =>{
    Product.find({id:req.params.id}).then(result=>{
        console.log(...result)
        res.json(...result)
        }).catch(err=>{
        console.log(err)
        res.send({err:"error ahhh"})
    })
})

// Update Product Old
ProductRoute.route('/update-product/:id').put((req,res,next)=>{
    Product.updateOne({id:req.params.id}, req.body).then((updatedDoc) => {
    // The updated document will be returned as a result of this method
    console.log("Update Successful");
    res.json(req.body);
  })
  .catch((err) => {
    console.error(err);
  });
})

//Delete Product 
ProductRoute.route('/delete-product/:id').delete((req,res,next) =>{
    Product.deleteOne({id:req.params.id})
    .then((result) => {
        if(result.deletedCount === 1){
            console.log("Delete Successful");
            res.json(req.body);
        }
        else{
            console.log('No user found with that ID');
            res.send('No user found with that ID');
        }
      })
      .catch((err) => {
        console.error(err);
      });
})

module.exports = ProductRoute;