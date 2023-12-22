const express=require("express");
const mongoose=require("mongoose");
const app=express();
const authoroute=require("./routes/autho.route")
const passport = require('passport');
const session = require('express-session');


const authRoutes = require('./routes/auth.route');
const cors=require("cors");
const cookieSession = require("cookie-session");

//DB connection
mongoose.connect("mongodb+srv://suthusutharsan2:12345@cluster0.30fxwds.mongodb.net/")
.then(()=>{
console.log("DB connected successfuly");
app.listen(5000,()=>{
    console.log("sever running on port 5000");
})
})
.catch((err)=>{
console.log(err.message);
})


app.use(express.json());
app.use(cors());
// Passport setup

require('./passport-setup')(passport);


// Express session middleware
app.use(
    session({
      name: 'session',
      secret: 'cyberwovle',
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 24 * 60 * 60 * 1000 },
    })
  );

app.use(passport.initialize());
app.use(passport.session());

//login signup route
app.use("/",authoroute)
app.use('/auth', authRoutes);
//client id : 980443254244-g5k0q12qiskd0a6qr1a0upcbd4it59lj.apps.googleusercontent.com
//client secret : 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
