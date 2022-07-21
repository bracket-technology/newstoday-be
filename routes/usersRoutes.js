const express = require("express")
const { getAllUsers, getEmail, updateAdmin, updatePassword, updateUser, deleteUser } = require('../controllers/usersControllers')
const router = express.Router()

router.get('/', getEmail)
router.patch('/:userId', updateUser) 
router.patch('/password/:userId',updatePassword)

router.get('/admin', getAllUsers)
router.patch('/admin/:userId', updateAdmin) 
router.delete('/admin/:userId', deleteUser)

module.exports = router












module.exports = router