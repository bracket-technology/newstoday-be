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
  getAllByNewsId: async (req, res) => {
    try {
      const { newsId } = req.params
      let { limit, page } = req.query
      limit = Number(limit) || 100
      page = Number(page) || 1
      const offset = (page - 1) * limit
      let totalAllData = await Comments.countCommentByNewsId(newsId)
      totalAllData = totalAllData[0].total
      const totalPage = Math.ceil(totalAllData / limit)
      let results = await Comments.getAllByNewsId(newsId, limit, offset)
      const totalRows = results.length
      if (page > totalPage) {
        return res.status(404).json({ success: false, message: 'Error: Page not found', data: [] })
      }
      if (!results) {
        return res.status(400).json({ success: false, message: `Error: Comment Empty`, data: [] })
      }
      return res.status(200).json({ success: true, message: "Success show all comment", data: { totalAllData, totalRows, totalPage, results } })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.message}`, data: [] })
    }
  },
  getCommentsByUserId: async (req, res) => {
    try {
      const { userId } = req.params
      const results = await Comments.getCommentByUserId(userId)
      if (!results) {
        return res.status(400).json({ success: false, message: `Error: Comment Empty`, data: [] })
      }
      return res.status(200).json({ success: true, message: "Success show all comment", data: results })

    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.message}`, data: [] })
    }
  },
  deleteComment: async (req, res) => {
    try {
      const { commentId } = req.params
      const results = await Comments.deleteComment(commentId)
      return res.status(200).json({ success: true, message: "Success delete comment" })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.message}`, data: [] })
    }
  }
}