const express = require("express")
const router = express.Router()
const { getArticleById, getAllNews, getArticleByCategory, postArticle, updateNews, deleteNews } = require('../controllers/newsController')
const { isLogin, isAdmin, isWriter, userNotAllow } = require('../middlewares/auth')
const newsImageUploads = require("../helpers/imageNews")


router.get('/', getAllNews)
router.get('/:categoryId', getArticleByCategory)
router.post('/', isLogin, userNotAllow, newsImageUploads, postArticle)
router.patch('/:newsId', isLogin, userNotAllow, newsImageUploads, updateNews)
router.delete('/:newsId', isLogin, userNotAllow, deleteNews)
router.get('/article/:newsId', getArticleById)


module.exports = router
