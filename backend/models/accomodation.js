const mongoose = require('mongoose');
const { Schema } = mongoose;
const accommodationSchema = new Schema({
  propertyName: {
    type: String,
    required: true
  },
  address: {
    area: {
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
    pinCode: {
      type: String,
      required: true
    }
  },
  photos: {
    type: String, // Assuming storing file paths, you may change as per your file storage strategy
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


// const mongoose = require('mongoose');
// const { Schema } = mongoose;
// const UserAccommodation = new Schema({
   
// });
// const Accommodation = mongoose.model('user',UserAccommodation);
// module.exports = Accommodation