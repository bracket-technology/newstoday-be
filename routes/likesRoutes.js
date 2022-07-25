const express = require("express")
const router = express.Router()
const { createLikes, getLikesByUserId, getLikesByNewsId, deleteLikes } = require('../controllers/likesController')
const { isAdmin } = require('../middlewares/auth')


router.post('/', createLikes)
router.get('/:userId', getLikesByUserId)
router.get('/:newsId', getLikesByNewsId)
router.delete('/:likesId', deleteLikes)



module.exports = router