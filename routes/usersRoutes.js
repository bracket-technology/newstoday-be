const express = require("express")
const router = express.Router()
const userUploads = require("../helpers/userUploads")
const { getAllUsers, getEmail, updateAdmin, updatePassword, updateUser, deleteUser } = require('../controllers/usersControllers')
const { isLogin, isAdmin } = require('../middlewares/auth')

router.get('/', isLogin, getEmail)
router.patch('/:userId', isLogin, userUploads, updateUser)
router.patch('/password/:userId', isLogin, updatePassword)

router.get('/admin', isAdmin, getAllUsers)
router.patch('/admin/:userId', isAdmin, userUploads, updateAdmin)
router.delete('/admin/:userId', isAdmin, deleteUser)

module.exports = router
