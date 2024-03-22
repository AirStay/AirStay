const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserAccommodation = new Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true,
    },
    phno:{
        type : String,
        required : true,
    },
    date:{
        type : Date,
        default : Date.now
    },
});
const Accommodation = mongoose.model('user',UserAccommodation);
module.exports = Accommodation