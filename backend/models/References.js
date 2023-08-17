const mongoose = require('mongoose');

const References = new mongoose.Schema({

    referenceName:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    
});

module.exports = mongoose.model('References',References);