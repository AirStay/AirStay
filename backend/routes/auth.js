const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require('express-validator');
//Route 1 : create a User using: POST "/api/auth/createuser" . No login required
router.post('/createuser', [
    body('name' , 'enter a valid name').isLength({ min: 3 }),
    body('email' , 'enter a valid email').isEmail(),
    body('password' , 'password must be of 8-20 characters long').isLength({ min: 8 }),
    body('phno' , 'enter a valid phno').isMobilePhone(),
] , async (req, res)=>{
    let success = false;
    //if there are errors return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success, errors : errors.array() });
    }
    try{
    //check wehether the user with this email exist already
    let user = await User.findOne({ email : req.body.email });
    console.log(user);
    if(user){
        return res.status(400).json({success, error : "Sorry a user with this email already exist"})
    }
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);
    //create new user
    user = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : secPass,
        phno : req.body.phno
    });
    const data = {
        user:{
            id: user.id
        }
    }
    JWT_SECRET = "blue"
    const authtoken = jwt.sign(data, JWT_SECRET);
    // .then(user => res.json(user))
    // .catch(err => {console.log(err)
    // res.json({err : 'Please enter unique value for email' , message : err.message})})
    // res.json(user)
    success = true;
    res.json({success, authtoken})
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

//Route 2 : Authenticate a User using: POST "/api/auth/login" . No login required
router.post('/login', [
    body('email' , 'enter a valid email').isEmail(),
    body('password' , 'password cannot be blank').exists(),
] , async (req, res)=>{
    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }
    
    const {email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(404).json({error : "Please try to login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            success = false
            return res.status(400).json({success,error : "Please try to login with correct credentials"})
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const JWT_SECRET = "blue";
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

    });
    //Route 3 : Get loggedin user details using: POST "/api/auth/getuser" . login required
    router.post('/getuser', fetchuser, async (req,res) => {
        try{
            userId = req.user.id;
            const user = await User.findById(userId).select("-password")
            res.send(user)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    })

module.exports = router
