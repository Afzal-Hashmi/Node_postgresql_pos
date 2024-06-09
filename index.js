const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
require("dotenv").config();
const { connectDB } = require("./db/connectdb.js");
//connecting db
connectDB();

//setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//setting up routes
app.use(routes);

//setting up port
app.listen(process.env.PORT || 8080, () =>
  console.log(`Started listing on port: ${process.env.PORT}`)
);
