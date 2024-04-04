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