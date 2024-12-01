const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.postregister = async (req, res, next) => {
  const { name, dob, email, password } = req.body;

  if (!name || !dob || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }
  const newUser = new User({
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const token = await newUser.generateAuthToken();
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
exports.postlogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      if (isMatch) {
          req.session.user = user;
        const accessToken = jwt.sign(
          { userId: user._id },
          process.env.SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        const userResponse = user.toObject();
        delete userResponse.password;
      
        res.status(200).json({
          message: "Login successful",
          accessToken,
          user: userResponse,
        });
      }
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
