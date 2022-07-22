const express = require("express")
const router = express.Router()
const categoryUploads = require("../helpers/categoryUploads")
const {getAllCategory, getCategoryById, addCategory, updateCategory, deleteCategory} = require('../controllers/categoryControllers')


router.get('/', getAllCategory)
router.get('/:categoryId', getCategoryById)
router.post('/', categoryUploads, addCategory)
router.patch('/:categoryId', categoryUploads, updateCategory)
router.delete('/', deleteCategory)

module.exports = router
