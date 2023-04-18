const express = require('express');
const app = express();
const Contact = require('../model/Contact');
const ContactRoute = express.Router();

ContactRoute.route('/addcontact').post((req,res,next)=>{

    Contact.create(req.body).then(result=>{
        console.log(result)
        res.json(result)
        }).catch(err=>{
        console.log(err)
        res.send({err:"error ahhh"})
    })
})

module.exports = ContactRoute;