const express = require("express")
const router = express.Router()
const { getArticleById, getAllNews,updateStatus, getArticleByCategory, postArticle, updateNews, deleteNews,getAllNewspub,getAllNewsrev } = require('../controllers/newsController')
const { isLogin, isAdmin, isWriter, userNotAllow } = require('../middlewares/auth')
const newsImageUploads = require("../helpers/imageNews")


router.get('/',isLogin,isAdmin, getAllNews)
router.get('/pubs', getAllNewspub)
router.get('/rev', getAllNewsrev)
router.get('/:newsId',getArticleById)
router.get('/category/:categoryId', getArticleByCategory)
router.post('/', isLogin, userNotAllow, newsImageUploads, postArticle)
router.patch('/status/:newsId',isLogin,isAdmin,updateStatus)
router.patch('/:newsId', isLogin, userNotAllow, newsImageUploads, updateNews)
router.delete('/:newsId', isLogin, userNotAllow, deleteNews)
router.get('/article/:newsId', getArticleById)


module.exports = router
