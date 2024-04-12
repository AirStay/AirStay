const mongoose = require('mongoose');
const { Schema } = mongoose;

const accommodationSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  propertyName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  image: {
    type: String, // Store the image path or URL
    required: true
  },
  description: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    enum: ['House', 'Flat', 'Guest House', 'Hotel'],
    required: true
  },
  roomType: {
    type: String,
    enum: ['Entire room', 'Room', 'Any Type'],
    required: true
  },
  amenities: {
    wifi: { type: Boolean, default: false },
    ac: { type: Boolean, default: false },
    tv: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    kitchen: { type: Boolean, default: false },
    washingMachine: { type: Boolean, default: false },
    pool: { type: Boolean, default: false }
  },
  moreInfo: {
    type: String
  },
  checkInTime: {
    type: String
  },
  checkOutTime: {
    type: String
  },
  maxGuests: {
    type: Number
  },
  price: {
    type: Number
  }
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);
module.exports = Accommodation;

