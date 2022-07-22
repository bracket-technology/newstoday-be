const express = require("express")
const router = express.Router()
const userUploads = require("../helpers/userUploads")
const { getAllUsers, getEmail, updateAdmin, updatePassword, updateUser, deleteUser } = require('../controllers/usersControllers')

router.get('/', getEmail)
router.patch('/:userId', userUploads, updateUser)
router.patch('/password/:userId', updatePassword)

router.get('/admin', getAllUsers)
router.patch('/admin/:userId', userUploads, updateAdmin)
router.delete('/admin/:userId', deleteUser)

module.exports = router












module.exports = router