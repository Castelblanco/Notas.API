"use strict";

const db = require("../database/connect"),
      encrypt = require("../libs/encrypt");

exports.getUser = async (req, res)=>{
    const users = await db.query("SELECT email FROM user");

    res.json(users);
}
      
exports.putUser = async (req, res)=>{
    try{
        const { name, lastname, email, password, id, token } = req.body,
        updateUser = { name, lastname, email };

        if (password) updateUser.password = await encrypt.encryptPassword(password);

        await db.query("UPDATE user SET ? WHERE id = ?", [updateUser, id]);

        res.json({...updateUser, token, id});
    }catch(e){
        if (e.code === "ER_DUP_ENTRY")
        return res.status(400).json({failed: "Este Correo ya esta Registrado"});
    }
}

exports.deleteUser = async (req, res)=>{
    const { id } = req.params;

    await db.query("DELETE FROM user WHERE id = ?", [id]);
    res.status(200).json({success: ""});
}