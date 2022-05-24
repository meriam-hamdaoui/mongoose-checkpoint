require("dotenv").config();
//1. require express package for the server
const express = require("express");

//require local modules
const connectDB = require("./config/connectDB");
const listener = require("./controllers/listener");
const { populate } = require("./models/person");
//11. import our person router
const personRouter = require("./routes/person");

//2.initiate the server
const app = express();

//5. link our server to our DB
connectDB();

//11.use json & the person router
app.use(express.json());
app.use("/api/people", personRouter);

//3.listen to our server on port
const port = process.env.PORT || 4000;
app.listen(port, (err) => listener(err, port));
