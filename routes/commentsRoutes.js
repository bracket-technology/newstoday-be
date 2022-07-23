const express = require("express")
const router = express.Router()
const { addComments, getAllByNewsId } = require('../controllers/commentsController')

router.post('/', addComments)


module.exports = router