const express = require("express")
const testController = require("../controllers/test.controller");
const { requireSignIn } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/",requireSignIn,testController.createTestController)
router.get("/",requireSignIn,testController.getAllTestController)
router.get("/:id",requireSignIn,testController.getTestController)
router.delete("/:id",requireSignIn,testController.deleteTestController)
router.put("/:id",requireSignIn,testController.editTestController)
module.exports = router