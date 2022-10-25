const express = require("express");

const router = express.Router();

const studentModule =  require("./modules/studentModule");

router.get("/get",studentModule.getStudent);
router.post("/create",studentModule.createStudent);
router.put("/update/:id",studentModule.updateStudent);
router.delete("/delete/:id",studentModule.deleteStudent);

module.exports = router;