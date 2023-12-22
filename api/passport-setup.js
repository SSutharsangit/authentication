const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("./models/user.model");

module.exports = function () {
    
  passport.use(new GoogleStrategy({
    clientID:'980443254244-g5k0q12qiskd0a6qr1a0upcbd4it59lj.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL: 'http://localhost:5000/auth/google/callback',
    scope: ['profile', 'email']

  },
  function (accessToken, refreshToken, profile, cb){
cb(null,profile)
  }));
  
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
