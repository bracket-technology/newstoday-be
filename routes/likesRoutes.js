const express = require("express")
const router = express.Router()
const { createLikes, getLikesByUserId, getLikesByNewsId, deleteLikes } = require('../controllers/likesController')


router.post('/', createLikes)
router.get('/:userId', getLikesByUserId)
router.get('/:newsId', getLikesByNewsId)
router.delete('/:likeId', deleteLikes)



module.exports = router