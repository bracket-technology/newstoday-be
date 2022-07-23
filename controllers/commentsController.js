const Comments = require('../models/comments')

module.exports = {
  addComments: async (req, res) => {
    try {
      let { userId, newsId, comment } = req.body
      userId = req.decodeToken.userId
      if (!comment) {
        return res.status(400).json({ success: false, message: `Error: Please input comment first`, data: [] })
      }
      const setData = { userId, newsId, comment }
      const results = await Comments.addComment(setData)
      return res.status(200).json({ success: true, message: "Success create comment", data: results })

    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}`, data: [] })
    }
  },

}