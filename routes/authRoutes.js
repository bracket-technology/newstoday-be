const express = require("express")
const router = express.Router()
const { register, verify, login, forgotPass, changePassword } = require('../controllers/authController')

router.post('/register', register)
router.get('/verify', verify)
router.post('/login', login)
router.get('/forgot-pass', forgotPass)
router.patch('/change-pass', changePassword)

module.exports = router
