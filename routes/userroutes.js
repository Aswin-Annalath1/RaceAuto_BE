
const {register,login,logout,send_verification_email} = require("../controller/usercontroller")

const router = require('express').Router();

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.post('/send-verification-email',send_verification_email)

module.exports = router