const express = require('express');
const router = express.Router();
const multer = require('multer');
const Accommodation = require('../models/accomodation');
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require('express-validator');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Add accommodation
router.post('/addaccomodation', upload.single('image'), fetchuser, [
  body('propertyName', 'Enter a valid property name').isLength({ min: 3 }),
  body('address', 'Enter a valid address').isLength({ min: 3 }),
  body('description', 'Enter a valid description').isLength({ min: 3 }),
  body('propertyType', 'Enter a valid property type').isIn(['House', 'Flat', 'Guest House', 'Hotel']),
  body('roomType', 'Enter a valid room type').isIn(['Entire room', 'Room', 'Any Type']),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { propertyName, address, city, state, pincode, description, propertyType, roomType, amenities, moreInfo, checkInTime, checkOutTime, maxGuests, price } = req.body;

    // Get the path of the uploaded image
    const image = req.file.filename;

    const accommodation = new Accommodation({
      propertyName,
      address,
      city,
      state,
      pincode,
      image, // Store the path of the uploaded image
      description,
      propertyType,
      roomType,
      amenities,
      moreInfo,
      checkInTime,
      checkOutTime,
      maxGuests,
      price,
      user: req.user.id
    });

    const savedAccommodation = await accommodation.save();
    res.json(savedAccommodation);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/useraccommodations', fetchuser, async (req, res) => {
  try {
    const accommodations = await Accommodation.find({ user: req.user.id });

    res.json(accommodations);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/disaccomodations', async (req, res) => {
  try {
    const allAccommodations = await Accommodation.find().populate('user', 'name email');

    res.json(allAccommodations);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ error: 'Accommodation not found' });
    }
    res.json(accommodation);
  } catch (error) {
    console.error('Error fetching accommodation details:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
