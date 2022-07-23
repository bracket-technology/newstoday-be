const express = require("express")
const router = express.Router()
const { getArticleById, getAllNews, getArticleByCategory, postArticle, updateNews, deleteNews } = require('../controllers/newsController')
const { isAdmin, isWriter, userNotAllow } = require('../middlewares/auth')
const newsImageUploads = require("../helpers/imageNews")


router.get('/', getAllNews)
router.get('/:categoryId', getArticleByCategory)
router.post('/', userNotAllow, newsImageUploads, postArticle)
router.patch('/:newsId', userNotAllow, newsImageUploads, updateNews)
router.delete('/:newsId', userNotAllow, deleteNews)
router.get('/article/:newsId', getArticleById)


module.exports = router
