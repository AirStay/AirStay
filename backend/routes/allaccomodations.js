const express = require('express');
const router = express.Router();
const multer = require('multer');
const Accommodation = require('../models/accomodation');
const User=require('../models/user');

router.get('/allaccomodations', async (req, res) => {
    try {
      const allAccommodations = await Accommodation.find().populate('user', 'name email');
  
      res.json(allAccommodations);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  });

  module.exports = router;