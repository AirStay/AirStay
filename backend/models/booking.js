const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
    userId:{
        type: String,
        required: true,

    },
    accoId:{
        type: String,
        required: true,
    },
    userEmail:{
        type: String,
        required: true,
    },
    fdate: {
        type: Date,
        required: true,
    },
    tdate: {
        type: Date,
        required: true,
    },
    guestnumber: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    phno: {
        type: String,
        required: true,
    },
    chname: {
        type: String,
        required: true,
    },
    cnumber: {
        type: String,
        required: true,
    },
    expiry: {
        type: String,
        required: true,
    },
    cvc: {
        type: String,
        required: true,
    }
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;
