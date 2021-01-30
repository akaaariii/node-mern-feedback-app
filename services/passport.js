// passport.js is authentication middleware for Node.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

// require api keys
const keys = require('../config/keys');
const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    })
    .catch(err => console.error(err))
})

// creates a new instance of google strategy
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/api/auth/google/callback',
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
  // console.log(accessToken);
  // console.log(refreshToken);
  // console.log(profile);

  // User.findOne({ googleId: profile.id })
  //   .then((existingUser) => {
  //     if(existingUser){
  //       done(null, existingUser);
  //     } else {
  //       new User({ googleId: profile.id })
  //         .save()
  //         .then((user) => done(null, user))
  //     }
  //   })
  //   .catch(err => console.error(err))

  const existingUser = await User.findOne({ googleId: profile.id });

  if(existingUser){
    return done(null, existingUser)
  }
  const user = await new User({ googleId: profile.id }).save();
  done(null, user);
}));
