const express = require("express")
const router = express.Router()
const categoryUploads = require("../helpers/categoryUploads")
const { getAllCategory, getCategoryById, addCategory, updateCategory, deleteCategory } = require('../controllers/categoryController')
const { isAdmin } = require('../middlewares/auth')


router.get('/', getAllCategory)
router.get('/:categoryId', getCategoryById)
router.post('/', isAdmin, categoryUploads, addCategory)
router.patch('/:categoryId', isAdmin, categoryUploads, updateCategory)
router.delete('/:categoryId', isAdmin, deleteCategory)

module.exports = router
