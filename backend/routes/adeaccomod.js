// const express = require('express');
// const router = express.Router();
// const Accommodation = require('../models/accomodation');
// const fetchuser = require("../middleware/fetchuser");
// const { body, validationResult } = require('express-validator');

// // Add accommodation
// router.post('/addaccomodation', fetchuser, [
//   body('propertyName', 'Enter a valid property name').isLength({ min: 3 }),
//   body('address.area', 'Enter a valid area').isLength({ min: 3 }),
//   body('address.city', 'Enter a valid city').isLength({ min: 3 }),
//   body('address.state', 'Enter a valid state').isLength({ min: 3 }),
//   body('address.pinCode', 'Enter a valid pin code').isLength({ min: 6 }),
//   // body('photos', 'Enter a valid photo URL').isMimeType,
//   body('description', 'Enter a valid description').isLength({ min: 10 }),
//   body('propertyType', 'Enter a valid property type').isIn(['House', 'Flat', 'Guest House', 'Hotel']),
//   body('roomType', 'Enter a valid room type').isIn(['Entire room', 'Room', 'Any Type']),
// ], async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { propertyName, address, description, propertyType, roomType, amenities, moreInfo, checkInTime, checkOutTime, maxGuests, price } = req.body;

//     const accommodation = new Accommodation({
//       propertyName,
//       address,
    
//       description,
//       propertyType,
//       roomType,
//       amenities,
//       moreInfo,
//       checkInTime,
//       checkOutTime,
//       maxGuests,
//       price,
//       user: req.user.id
//     });

//     const savedAccommodation = await accommodation.save();
//     res.json(savedAccommodation);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Fetch all accommodations
// router.get('/fetchaccommodations', fetchuser, async (req, res) => {
//   try {
//     const accommodations = await Accommodation.find({ user: req.user.id });
//     res.json(accommodations);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Update an existing accommodation
// router.put('/accommodations/:accommodationId', fetchuser, async (req, res) => {
//   try {
//     const { propertyName, address, description, propertyType, roomType, amenities, moreInfo, checkInTime, checkOutTime, maxGuests, price } = req.body;

//     const updatedAccommodation = await Accommodation.findOneAndUpdate(
//       { _id: req.params.accommodationId, user: req.user.id },
//       { propertyName, address, photos, description, propertyType, roomType, amenities, moreInfo, checkInTime, checkOutTime, maxGuests, price },
//       { new: true }
//     );

//     if (!updatedAccommodation) {
//       return res.status(404).json({ error: 'Accommodation not found' });
//     }

//     res.json(updatedAccommodation);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Delete an existing accommodation
// router.delete('/accommodations/:accommodationId', fetchuser, async (req, res) => {
//   try {
//     const deletedAccommodation = await Accommodation.findOneAndDelete({
//       _id: req.params.accommodationId,
//       user: req.user.id
//     });

//     if (!deletedAccommodation) {
//       return res.status(404).json({ error: 'Accommodation not found' });
//     }

//     res.json(deletedAccommodation);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// module.exports = router;


// // const express = require('express');
// // const router = express.Router();
// // const Accommodation = require('../models/accomodation');
// // const fetchuser = require("../middleware/fetchuser");
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');
// // const { body, validationResult } = require('express-validator');

// // router.post('/addaccomod', fetchuser, [
// //   body('title', 'Enter a valid name').isLength({ min: 3 }),
// //   body('company', 'Enter a valid email'),
// //   body('state', 'Enter a valid state name').isLength({ min: 3 }),
// //   body('city', 'Enter a valid city name').isLength({ min: 3 }),
// //   body('address', 'Enter a valid phone number'),
// //   body('description', 'Enter a valid company name').isLength({ min: 3 }),
// //   body('requirements', 'Enter a valid pincode').isLength({ min: 10 }),
// // ], async (req, res) => {
// //   try {
// //     const { title, company, state, city, address, description, requirements } = req.body;

// //     // If there are errors, return Bad request and the errors
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       return res.status(400).json({ errors: errors.array() });
// //     }

// //     // Declare the newJob variable
// //     let newJob;

// //     // Assign a new instance of the Job model to newJob
// //     newJob = new Job({
// //       employer: req.employer.id,
// //       title,
// //       company,
// //       state,
// //       city,
// //       address,
// //       description,
// //       requirements,
// //     });

// //     const savedJob = await newJob.save();

// //     res.json(savedJob);
// //   } catch (error) {
// //     console.error(error.message);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });


// // router.get('/fetchalljobs', fetchemployer, async (req, res) => {
// //   try {
// //     const jobs = await Job.find({ employer: req.employer.id });
// //     res.json(jobs)
// //   } catch (error) {
// //     console.error(error.message);
// //     res.status(500).send("Internal Server Error");
// //   }
// // })

// // // Update an existing job
// // router.put('/jobs/:jobId', async (req, res) => {
// //   try {
// //     const updatedJob = await Job.findOneAndUpdate(
// //       { _id: req.params.jobId, postedBy: req.user.id },
// //       req.body,
// //       { new: true }
// //     );

// //     if (!updatedJob) {
// //       return res.status(404).json({ error: 'Job not found' });
// //     }

// //     res.json(updatedJob);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to update job' });
// //   }
// // });

// // // Delete an existing job
// // router.delete('/jobs/:jobId', async (req, res) => {
// //   try {
// //     const deletedJob = await Job.findOneAndDelete({
// //       _id: req.params.jobId,
// //       postedBy: req.user.id, 
// //     });

// //     if (!deletedJob) {
// //       return res.status(404).json({ error: 'Job not found' });
// //     }

// //     res.json(deletedJob);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to delete job' });
// //   }
// // });

// // module.exports = router;

const express = require('express');
const router = express.Router();
const multer = require('multer');
const Accommodation = require('../models/accomodation');
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require('express-validator');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set unique filenames for uploaded images
  }
});

const upload = multer({ storage: storage });

// Add accommodation
router.post('/addaccomodation', fetchuser, upload.single('image'), [
  body('propertyName', 'Enter a valid property name').isLength({ min: 3 }),
  body('address', 'Enter a valid address').isLength({ min: 10 }),
  body('description', 'Enter a valid description').isLength({ min: 10 }),
  body('propertyType', 'Enter a valid property type').isIn(['House', 'Flat', 'Guest House', 'Hotel']),
  body('roomType', 'Enter a valid room type').isIn(['Entire room', 'Room', 'Any Type']),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { propertyName, address, description, propertyType, roomType, amenities, moreInfo, checkInTime, checkOutTime, maxGuests, price } = req.body;

    // Get the path of the uploaded image
    const image = req.file.path;

    const accommodation = new Accommodation({
      propertyName,
      address,
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

// Other routes...

module.exports = router;
