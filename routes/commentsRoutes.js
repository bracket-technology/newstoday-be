const express = require("express")
const router = express.Router()
const { addComments, getAllByNewsId, getCommentsByUserId, deleteComment } = require('../controllers/commentsController')

router.post('/', addComments)
router.get('/:userId', getCommentsByUserId)
router.delete('/:commentId', deleteComment)
router.get('/article/:newsId', getAllByNewsId)

module.exports = router