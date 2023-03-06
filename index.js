const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");
const contactRoute = require("./routes/contactRoute");

const app = express();
dotenv.config();
const port = process.env.port || 5000;
app.use(express.json());

app.use(cors({
  origin: '*'
}));


connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/contact", contactRoute);

app.listen(port, console.log(`server started`.yellow.bold));

