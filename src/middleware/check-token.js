"use strict";

const jwt = require("jsonwebtoken");
require("../config");

exports.checkToken = (req, res, next)=>{
    try{
        const token = req.headers["token"];

        if (!token) return res.status(404).json({failed: "token not found"});

        jwt.verify(token, process.env.SECRET_TOKEN);
        next();
    }catch(e){
        res.status(400).json({failed: "token Invalid"});
    }
}