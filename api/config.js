// config.js or wherever your configuration is defined
module.exports = {
    
    google: {
      clientID: '980443254244-g5k0q12qiskd0a6qr1a0upcbd4it59lj.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    session: {
      secret: 'your-random-secret-string-here',
    },
  };
  