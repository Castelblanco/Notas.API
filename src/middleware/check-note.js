"use strict";

exports.checkNote = (req, res, next)=>{
    const { title, description, important, created_user } = req.body;

    if (title.length <= 0) return res.status(400).json({failed: "Agrege un titulo"});
    if (description.length <= 2) return res.status(400).json({failed: "Agrege una descripción valida"});
    if (!important) return res.status(400).json({failed: "Agrege un nivel de importancia"});
    if (!created_user) return res.status(400).json({failed: "Agrege un usuario existente"});
    
    next();
}