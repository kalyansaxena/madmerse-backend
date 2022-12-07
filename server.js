const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

// connectDB();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/payment", require("./routes/checkout"));

app.listen(port, () => console.log("Server listening on port ", port));
