const express = require("express")
const router = express.Router()
const { requestFollowByFollowerId, accFollowByUserId, unfollowByFollowerId } = require('../controllers/friendsController')

router.patch('/', accFollowByUserId)
// router.get('/:userId', getFollowers)
router.post('/follow', requestFollowByFollowerId)
router.delete('/unfollow', unfollowByFollowerId)

module.exports = router