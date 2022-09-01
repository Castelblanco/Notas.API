"use strict";

const { Router } = require("express"),
      router = Router(),
      ctrl = require("../controllers/auth"),
      mdlwr = require("../middleware/index");

router.post("/signup", mdlwr.checkSignup,ctrl.signup)
      .post("/signin", mdlwr.checkSignin, ctrl.signin);


module.exports = router;