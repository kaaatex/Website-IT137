mongoose = require('mongoose');

var schemaAdmindb = new mongoose.Schema({
    firstname : {
        type : String,
       
    },
    middlename : {
        type : String,
       
    },
    surname : {
        type : String,
       
    },
    address : {
        type : String,
       
    },
    contactNo : {
        type : String,
        
    },
    email : {
        type: String,
        

    },
    username : {
        type : String,
       
    },
    password : {
        type : String,
    },
    token: { 
        type: String 
    },
    
})

const Admindb = mongoose.model('admindb', schemaAdmindb);
module.exports = Admindb;