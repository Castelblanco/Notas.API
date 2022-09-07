"use strict";

const express = require("express"),
      app = express(),
      cors = require("cors");

// Setting
app.set("port", process.env.PORT || 3000);

//Middleware
app.use(express.json())
   .use(express.urlencoded({ extended: true }))
   .use(cors({ origin: "http://localhost:5173" }));

//Routers
app.use("/user", require("./router/user"))
   .use("/notes", require("./router/notes"))
   .use("/auth", require("./router/auth"));

module.exports = app;