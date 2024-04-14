const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

router.post('/bookaccomod', fetchuser, [
    body('fdate', 'Enter a valid date').isDate(),
    body('tdate', 'Enter a valid date').isDate(),
    body('guestnumber', 'Enter a valid guest number').isInt({ min: 1 }),
    body('name', 'Enter a valid name').trim().notEmpty(),
    body('phno', 'Enter a valid phone number').isMobilePhone(),
    body('chname', 'Enter a valid phone name'),
    body('cnumber', 'Enter a valid card nnumber'),
    body('expiry', 'Enter a valid date'),
    body('cvc', 'Enter a cvc'),
    body('userEmail'),
    body('userId')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { accoId, userId, userEmail, fdate, tdate, guestnumber, name, phno, chname, cnumber, expiry, cvc } = req.body;

        const booking = new Booking({
            fdate,
            tdate,
            guestnumber,
            name,
            phno,
            chname,
            cnumber,
            expiry,
            cvc,
            userEmail,
            userId,
            accoId
        });

        const savedBooking = await booking.save();
        res.json(savedBooking);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/userbookings', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const bookings = await Booking.find({ userId });
        res.json(bookings);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;
