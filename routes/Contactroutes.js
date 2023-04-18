const express = require('express');
const app = express();
const Contact = require('../model/Contact');
const ContactRoute = express.Router();

ContactRoute.route('/addcontact').post((req,res,next)=>{

    const Contacts = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        textmessage:req.body.a
    }
    Contact.create(Contacts).then(result=>{
        console.log(Contacts)
        console.log(result)
        res.json(result)
        }).catch(err=>{
        console.log(err)
        res.send({err:"error ahhh"})
    })
})

module.exports = ContactRoute;