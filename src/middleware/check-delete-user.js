"use strict";

const db = require("../database/connect"),
      encrypt = require("../libs/encrypt");

exports.checkDeleteUser = async (req, res, next)=>{
    const { password, secondPassword, email } = req.body,
          passwordUser = await db.query("SELECT password FROM user WHERE email = ?", [email]),
          firstCheck = await encrypt.comparePassword(password, passwordUser[0].password);

    if (!firstCheck) return res.status(400).json({failed: "Primera Contraseña Incorrecta"});

    const secondCheck = await encrypt.comparePassword(secondPassword, passwordUser[0].password);

    if (!secondCheck) return res.status(400).json({failed: "Segunda Contraseña Incorrecta"});

    next();
}