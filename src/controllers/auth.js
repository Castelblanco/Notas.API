"use strict";

const db = require("../database/connect"),
      encrypt = require("../libs/encrypt"),
      jwt = require("jsonwebtoken");

require("../config");

exports.signup = async (req, res)=>{
    try{
        req.body.password = await encrypt.encryptPassword(req.body.password);
        const newUser = await db.query("INSERT INTO user SET ?", [req.body]);
        
        req.body.id = newUser.insertId;
        req.body.token = jwt.sign({data: Date.now()}, process.env.SECRET_TOKEN, {
            expiresIn: "10s"
        });

        delete req.body.password;

        res.status(201).json(req.body);
    }catch(e){
        if (e.message.indexOf("ER_DUP_ENTRY") != -1) return res.status(400).json({failed: "Este Correo ya esta registrado"});
        res.json({message: e.message});
    }
}

exports.signin = async (req, res)=>{
    const {email} = req.body,
          user = await db.query("SELECT id, name, lastname, email FROM user WHERE email = ?", [email]);
          
    user[0].token = jwt.sign({data: Date.now()}, process.env.SECRET_TOKEN, {
        expiresIn: "10s"
    });

    res.json(...user);
}