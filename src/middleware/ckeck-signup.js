"use strict";

exports.checkSignup = (req, res, next)=>{
    const { name, lastname, email, password } = req.body;
    
    if (name.length < 3) return res.status(400).json({failed: "Nombre no valido, minimo 3 caracteres"});
    if (lastname.length < 3) return res.status(400).json({failed: "Apellido no valido, minimo 3 caracteres"});
    if (email.indexOf("@") == -1) return res.status(400).json({failed: "Correo no valido"});
    if (password.length < 5) return res.status(400).json({failed: "Contraseña no valida, minimo 5 caracteres"});
    
    next();
}