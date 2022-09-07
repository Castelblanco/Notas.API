"use strict";

const db = require("../database/connect"),
      {format} = require("timeago.js");

exports.getNotes = async (req, res)=>{
    const { id } = req.params,
          notes = await db.query("SELECT id, title, description, created_user, important, created_at FROM notes WHERE created_user = ?", [id]);
    
    notes.forEach(v => v.created_at = format(v.created_at, "es_CO"));

    res.json(notes);
}

exports.postNotes = async (req, res)=>{
    try{
        req.body.created_at = new Date();
        await db.query("INSERT INTO notes SET ?", [req.body]);
        res.json({success: "Nota Creada"});
    }catch(e){
        if (e.code == "ER_NO_REFERENCED_ROW_2")
        return res.status(400).json({failed: "El usuario no existe"});

        if (e.code == "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD")
        return res.status(400).json({failed: "Seleccione un nivel de Importancia"});
    }
}

exports.putNotes = async (req, res)=>{
    try{
        await db.query("UPDATE notes SET ? WHERE id = ?", [req.body, req.params.id]);
        res.json({success: "Nota actualizada"});
    }catch(e){
        if (e.code == "ER_NO_REFERENCED_ROW_2")
        return res.status(400).json({message: "Este Nivel de Importacia no existe"});
        
        if (e.code == "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD")
        return res.status(400).json({failed: "Seleccione un nivel de Importancia"})
    }
}

exports.deleteNotes = async (req, res)=>{
    await db.query("DELETE FROM notes WHERE id = ?", [req.params.id]);
    res.json({success: "Nota Borrada"});
}