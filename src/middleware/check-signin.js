"use strict";

const db = require("../database/connect"),
      encrypt = require("../libs/encrypt");

exports.checkSignin = async (req, res, next)=>{
    const { email, password } = req.body,
          user = await db.query("SELECT * FROM user WHERE email = ?", [email]);

    if (user.length == 0) return res.status(404).json({failed: "Correo Incorrecto"});

    const comparePassword = await encrypt.comparePassword(password, user[0].password);

    if (!comparePassword) return res.status(400).json({failed: "Contraseña Incorrecta"});

    next();
}