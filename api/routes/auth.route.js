const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/login/success', (req, res) => {
  res.send("Login success");
});

router.get('/login/failed', (req, res) => {
  res.send("Login failed");
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/callback', 
  passport.authenticate('google', { successRedirect: '/auth/login/success', failureRedirect: '/auth/login/failed' })
);


module.exports = router;
// /auth/google/auth/login/success