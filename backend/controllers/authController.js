const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Regular expression for password validation: at least 8 characters, one uppercase, one lowercase, and one number
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// Regular expression for phone validation: only numbers, no spaces, and no special characters
const phoneRegex = /^[0-9]+$/;

// Regular expression for name validation: only letters, no numbers or special characters
const nameRegex = /^[A-Za-z]+$/;

// Regular expression for email validation: must end with @gmail.com
const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;



// SignUp function
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userType, photo, city, address, phone } = req.body;

    // Check first name validation (only letters and maximum 15 characters)
    if (!nameRegex.test(firstName) || firstName.length > 15) {
      return res.status(400).json({ message: 'First name must contain only letters and be up to 15 characters long.' });
    }

    // Check last name validation (only letters and maximum 15 characters)
    if (!nameRegex.test(lastName) || lastName.length > 15) {
      return res.status(400).json({ message: 'Last name must contain only letters and be up to 15 characters long.' });
    }

    // Check email validation (must end with @gmail.com)
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email must be in the format example@gmail.com.' });
    }

    // Check password validation
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.' });
    }

    // Check phone validation
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Phone number must contain only numbers.' });
    }

    const userPhoto = photo || null;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      userType,
      city,
      address,
      phone,
    });

    await user.save();
    res.status(201).json({ message: 'User Signed up Successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Login function

//without 3 chances
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Check if the password matches
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // If user exists and password matches, generate a JWT token
//     const token = jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     // Send the token and user details
//     res.status(200).json({ token, user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the user is locked out
    if (user.lockoutUntil && user.lockoutUntil > Date.now()) {
      const timeLeft = Math.ceil((user.lockoutUntil - Date.now()) / 1000); // Time left in seconds
      return res.status(400).json({ message: `Your account is locked. Try again in ${timeLeft} seconds.` });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Increment failed attempts
      user.failedAttempts += 1;

      if (user.failedAttempts >= 3) {
        // Lock the user out for 30 seconds (30000ms)
        user.lockoutUntil = Date.now() + 30 * 1000; // 30 seconds lockout (in milliseconds)
      }

      await user.save();

      return res.status(400).json({ message: 'Invalid credentials. Attempt ' + user.failedAttempts + ' of 3.' });
    }

    // If the password matches, reset failedAttempts and lockoutUntil
    user.failedAttempts = 0;
    user.lockoutUntil = null;  // Reset lockout
    await user.save();

    // If user exists and password matches, generate a JWT token
    const token = jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Send the token and user details
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
