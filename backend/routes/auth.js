const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure the User model is correct
const router = express.Router();

// SignUp Route
router.post('/signup', async (req, res) => {
  const { fname, lname, email, password, userType, department, speciality } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ errorMsg: 'User with this email already exists.' });
    }

    // Hash the password before saving it
    const salt=await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new User({
      fname,
      lname,
      email,
      password: hashedPassword,
      userType,
      department,
      speciality
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ msg: 'Signup successful' });

  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ errorMsg: 'An error occurred during signup.' });
  }
});

// SignIn Route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(400).json({ error: true, errorMsg: 'Invalid email or password!111' });
    }

    // Compare the entered password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: true, errorMsg: 'Invalid email or password222!' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      success: true,
      message: 'Signin successful!',
      userType: user.userType,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, errorMsg: 'An error occurred during signin.' });
  }
});

module.exports = router;
