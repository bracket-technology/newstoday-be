const express = require("express")
const router = express.Router()
const { register, verify, login } = require('../controllers/authController')

router.post('/register', register)
router.get('/verify', verify)
router.post('/login', login)

module.exports = router
