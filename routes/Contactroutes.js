const express = require('express');
const Contact = require('../model/Contact');
const ContactRoute = express.Router();

ContactRoute.route('/addcontact').post((req,res,next)=>{

    Contact.create({...req.body}).then(result=>{
        console.log(req.body)
        res.json(result)
        }).catch(err=>{
        console.log(err)
        res.send({err:"error ahhh"})
    })
})
module.exports = ContactRoute;