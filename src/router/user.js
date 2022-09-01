"use strict";

const { Router } = require("express"), 
      router = Router(),
      ctrl = require("../controllers/user"),
      mdlwr = require("../middleware/");

router.get("/", mdlwr.checkToken, ctrl.getUser)
      .put("/", [mdlwr.checkPutUser, mdlwr.checkToken],ctrl.putUser)
      .delete("/:id", [mdlwr.checkToken, mdlwr.checkDeleteUser],ctrl.deleteUser);

module.exports = router;