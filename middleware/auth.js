// auth.js
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');




passport.use(new BearerStrategy(async(token, done) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({_id:decoded._id})
    console.log(user,decoded)
    if (!user) return done(null, false);
    return done(null, user);
  } catch (err) {
    return done(null, false);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id); // store user ID in session
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user); // retrieve user from ID
});

module.exports =  passport
