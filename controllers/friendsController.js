const Friend = require('../models/friends')

module.exports = {
  requestFollowByFollowerId: async (req, res) => {
    try {
      let { userId, followerId } = req.body
      followerId = req.decodeToken.userId
      setData = { userId, followerId }
      const results = await Friend.requestFollowByFollowerId(setData)
      return res.status(200).json({ success: true, message: "Success request follow", data: results })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}` })
    }
  },
  accFollowByUserId: async (req, res) => {
    try {
      const { status } = req.body
      let { userId, followerId } = req.query
      userId = req.decodeToken.userId
      const setData = { status, updated_at: new Date(Date.now()) }
      const results = await Friend.accFollowByUserId(setData, userId, followerId)
      return res.status(200).json({ success: true, message: "Success accept follow", data: results })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.message}` })
    }
  },
  unfollowByFollowerId: async (req, res) => {
    try {
      let { userId, followerId } = req.query
      followerId = req.decodeToken.userId
      const results = await Friend.unfollowByFollowerId(userId, followerId)
      return res.status(200).json({ success: true, message: "Success unfollow", data: [] })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.message}` })
    }
  },
}