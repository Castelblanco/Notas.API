"use strict";

const db = require("../database/connect");

exports.checkNote = async (req, res, next)=>{
    const { title, description, important, created_user } = req.body,
          checkImportant = await db.query("SELECT * FROM important WHERE id = ?", [important]),
          checkUser = await db.query("SELECT * FROM user WHERE id = ?", [created_user]);

    if (title.length <= 0)
    return res.status(400).json({failed: "Agrege un titulo"});

    if (description.length <= 2)
    return res.status(400).json({failed: "Agrege una descripción valida"});
          
    if (checkImportant.length === 0)
    return res.status(400).json({failed: "Agrege un nivel de Importancia Valida"});

    if (checkUser.length === 0)
    return res.status(404).json({failed: "Usuario invalido"});

    
    next();
}