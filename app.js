require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const AuthRoute=require("./routes/AuthRoute");
const UsersRoute=require("./routes/UserRoute");
const session = require("express-session");
const app = express();
const cors = require("cors");
const User = require("./models/User");
const port = process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("connected");
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    name: "cookie",
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
    },
  })
);
app.use("/api/auth",AuthRoute);
app.use("/api/users", UsersRoute);

app.listen(port, () => {
  console.log(`listning at port ${port}`);
});
