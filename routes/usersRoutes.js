const express = require("express")
const router = express.Router()
const userUploads = require("../helpers/userUploads")
const { getAllUsers, getEmail, updateAdmin, updatePassword, updateUser, deleteUser, requestAuthor, getUsersReqAuthor, accAuthorByAdmin } = require('../controllers/usersControllers')
const { isAdmin } = require('../middlewares/auth')

router.get('/', getEmail)
router.patch('/:userId', userUploads, updateUser)
router.patch('/password/:userId', updatePassword)
router.patch('/req-author/:userId', requestAuthor)

router.get('/admin', isAdmin, getAllUsers)
router.get('/admin/user-req-author', isAdmin, getUsersReqAuthor)
router.patch('/admin/:userId', isAdmin, userUploads, updateAdmin)
router.patch('/admin/acc-author/:userId', isAdmin, accAuthorByAdmin)
router.delete('/admin/:userId', isAdmin, deleteUser)

module.exports = router
