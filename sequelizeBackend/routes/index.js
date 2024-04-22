const express = require("express")
const authRoute = require("./auth.route")
const testRoute = require("./test.route")
const router = express.Router();

router.use("/users",authRoute)
router.use("/test",testRoute)

module.exports = router