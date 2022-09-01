"use strict";

const bycrypt = require("bcryptjs");

exports.encryptPassword = async password =>{
    const salt = await bycrypt.genSaltSync(10);
    return await bycrypt.hashSync(password, salt);
}

exports.comparePassword = async (password, passwordSaved) => await bycrypt.compare(password, passwordSaved);