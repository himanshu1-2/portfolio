const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const dbConfig = require("./config/dbConfig");
const passport = require('./middleware/auth')
const portfolioRoute = require("./routes/portfolioRoute");
const session = require('express-session');
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.use(session({
  secret: 'your_secret_key',          // Replace with process.env.SECRET in real apps
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }           // Set to true if using HTTPS
}));

app.use(passport.initialize());
app.use(passport.session());
app.use("/api/portfolio", portfolioRoute);
app.use('/public', express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 5000;


if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build/index.html"));
    } );
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
