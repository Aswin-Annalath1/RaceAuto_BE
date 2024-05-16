
const {register,login,logout} = require("../controller/usercontroller")

const router = require('express').Router();

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)

module.exports = router