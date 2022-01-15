mongoose = require('mongoose');

var schemaEvent = new mongoose.Schema({
    eventTitle : {
        type : String
    },
    eventStartMonth : {
        type : String
    },
    eventStartDate : {
        type : String
    },
    eventStartYear : {
        type : String
        
    },
    eventEndMonth : {
        type : String
    },
    eventEndDate : {
        type : String
    },
    eventEndYear : {
        type : String
        
    },
    eventStartHour : {
        type : String
    },
    eventStartMinute : {
        type : String
    },
    eventStartAM_PM : {
        type : String
    },
    eventEndHour : {
        type : String
    },
    eventEndMinute : {
        type : String
    },
    eventEndAM_PM : {
        type : String
    },
})

const Eventdb = mongoose.model('eventdb', schemaEvent);
module.exports = Eventdb;