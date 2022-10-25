const express = require("express");

const router = express.Router();

const mentorModule =  require("./modules/mentorModule");

router.get("/get",mentorModule.getMentor);
router.post("/create",mentorModule.createMentor);
router.put("/update/:id",mentorModule.updateMentor);
router.delete("/delete/:id",mentorModule.deleteMentor);

module.exports = router;