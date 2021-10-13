const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
/* Dependencies */
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());
// Initialize the main project folder
app.use(express.static("client"));

app.listen(process.env.PORT || 8080);
