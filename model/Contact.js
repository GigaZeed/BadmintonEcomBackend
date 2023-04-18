const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    textmessage: { type: String }
},{
    collection: 'Contact'
})

module.exports = mongoose.model('Contact',Contact)