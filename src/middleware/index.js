"use strict";

module.exports = {
    checkSignin: require("./check-signin").checkSignin,
    checkToken: require("./check-token").checkToken,
    checkSignup: require("./ckeck-signup").checkSignup,
    checkNote: require("./check-note").checkNote,
    checkPutUser: require("./check-put-user").checkSignup,
    checkDeleteUser: require("./check-delete-user").checkDeleteUser
}