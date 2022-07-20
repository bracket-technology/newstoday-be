const express = require("express")
const { getAllUsers, getEmail, updateEmail } = require('../controllers/usersControllers')
const router = express.Router()

router.get('/', getAllUsers)
router.get('/email', getEmail)








module.exports = router