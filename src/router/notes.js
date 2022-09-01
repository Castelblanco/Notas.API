"use strict";

const { Router } = require("express"),
      router = Router(),
      ctrl = require("../controllers/notes"),
      mdlwr = require("../middleware/");

router.get("/:id", mdlwr.checkToken,ctrl.getNotes)
      .post("/", [mdlwr.checkToken, mdlwr.checkNote],ctrl.postNotes)
      .put("/:id", [mdlwr.checkToken, mdlwr.checkNote],ctrl.putNotes)
      .delete("/:id", mdlwr.checkToken,ctrl.deleteNotes);

module.exports = router;