mongoose = require('mongoose');


var schemaUser = new mongoose.Schema({
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
    category : {
        type : String,
       
    },
    userID : {
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
    //License Details
    driversLicenseNo : {
        type : String,
      
    },
    licenseExpiryMonth : {
        type : String,
      
    },
    licenseExpiryDate : {
        type : String,
    
    },
    licenseExpiryYear : {
        type : String,
     
    },
    licenseType : {
        type : String,
     
    },
    licenseDocu : {
        type : String,
    },
    //Vehicle Details 
    vehicleRegistrationNo : {
        type : String,
        
    },
    vehicleExpiryMonth : {
        type : String,
      
    },
    vehicleExpiryDate : {
        type : String,
    
    },
    vehicleExpiryYear : { 
        type : String,
     
    },
    vehicleRegistrationDocu : {
        type : String, 
    },
    RFID : {
        type : String,
       
    },
    vehicleModel : {
        type : String,
       
    },
    vehicleType : {
        type : String,
       
    },
    vehicleColor : {
        type : String,
        
    },
    
    plateNo : {
        type : String,
     
    },
    token: { 
        type: String 
    },
    
})

const Userdb = mongoose.model('userdb', schemaUser);
module.exports = Userdb;