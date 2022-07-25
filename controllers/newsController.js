const News = require('../models/news')
const fs = require('fs');

module.exports = {
  getArticleById: async (req, res) => {
    try {
      const { newsId } = req.params
      const result = await News.getNewsById(newsId)
      if (!result.length) {
        return res.status(404).json({
          success: false, message: `Error: Data by ${newsId} not found!`, data: []
        })
      }
      return res.status(200).json({ success: true, message: 'Success show details article', data: result[0] })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}`, data: [] })
    }
  },
  getArticleByCategory: async (req, res) => {
    try {
      const { categoryId } = req.params
      let { orderBy = '' || 'asc', limit, page } = req.query
      limit = Number(limit) || 100
      page = Number(page) || 1
      const offset = (page - 1) * limit
      let totalAllData = await News.countAllNewsByCategory(categoryId)
      totalAllData = totalAllData[0].total
      const totalPage = Math.ceil(totalAllData / limit)
      let results = await News.getNewsByCategory(orderBy, limit, offset, categoryId)
      const totalRows = results.length
      if (page > totalPage) {
        return res.status(404).json({ success: false, message: 'Error: Page not found', data: [] })
      }
      if (!results.length) {
        return res.status(404).json({
          success: false, message: `Error: Category by ${categoryId} not found!`, data: []
        })
      }
      return res.status(200).json({ success: true, message: 'Success show articles by category', data: { totalAllData, totalRows, totalPage, results } })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}`, data: [] })
    }
  },
  getAllNews: async (req, res) => {
    try {
      let { search = '', orderBy = '' || 'asc', limit, page } = req.query
      limit = Number(limit) || 100
      page = Number(page) || 1
      const offset = (page - 1) * limit
      let totalAllData = await News.countAllNews()
      totalAllData = totalAllData[0].total
      const totalPage = Math.ceil(totalAllData / limit)
      let results = await News.getAllNews(search, orderBy, limit, offset)
      const totalRows = results.length
      if (page > totalPage) {
        return res.status(404).json({ success: false, message: 'Error: Page not found', data: [] })
      }
      return res.status(200).json({ success: true, message: "Success show all article", data: { totalAllData, totalRows, totalPage, results } })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}`, data: [] })
    }
  },
  getAllNewspub: async (req, res) => {
    try {
      let { search = '', orderBy = '' || 'asc', limit, page } = req.query
      limit = Number(limit) || 100
      page = Number(page) || 1
      const offset = (page - 1) * limit
      let totalAllData = await News.countAllNewsPub()
      totalAllData = totalAllData[0].total
      const totalPage = Math.ceil(totalAllData / limit)
      let results = await News.getAllNewsByPub(search, orderBy, limit, offset)
      const totalRows = results.length
      if (page > totalPage) {
        return res.status(404).json({ success: false, message: 'Error: Page not found', data: [] })
      }
      return res.status(200).json({ success: true, message: "Success show all article", data: { totalAllData, totalRows, totalPage, results } })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}`, data: [] })
    }
  },
  getAllNewsrev: async (req, res) => {
    try {
      let { search = '', orderBy = '' || 'asc', limit, page } = req.query
      limit = Number(limit) || 100
      page = Number(page) || 1
      const offset = (page - 1) * limit
      let totalAllData = await News.countAllNewsRev()
      totalAllData = totalAllData[0].total
      const totalPage = Math.ceil(totalAllData / limit)
      let results = await News.getAllNewsByRev(search, orderBy, limit, offset)
      const totalRows = results.length
      if (page > totalPage) {
        return res.status(404).json({ success: false, message: 'Error: Page not found', data: [] })
      }
      return res.status(200).json({ success: true, message: "Success show all article", data: { totalAllData, totalRows, totalPage, results } })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}`, data: [] })
    }
  },
  postArticle: async (req, res) => {
    try {
      let { userId, categoryId, title, descriptionNews, content, newsImage } = req.body
      newsImage = req.file ? req.file.filename : 'http://bppl.kkp.go.id/uploads/publikasi/karya_tulis_ilmiah/default.jpg'
      userId = req.decodeToken.userId
      let status = 'review'
      if (req.decodeToken.role === 'admin') {
        status = 'publish'
      }
      if (req.decodeToken.role === 'writer') {
        status = 'review'
      }
      if (!categoryId || !title || !descriptionNews || !content || !newsImage) {
        return res.status(404).json({ success: false, message: `Error: Fields must be filled` })
      }
      const data = { userId, categoryId, title, descriptionNews, content, newsImage,status }
      const results = await News.postArticle(data)
      return res.status(200).json({ success: true, message: "Success create new article", data: results })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}` })
    }
  },
  updateStatus: async(req,res) => {
      try{
          let { newsId } = req.params
          const newsCheck = await News.getNewsById(newsId)
          if (!newsCheck.length) {
            return res.status(400).json({
              success: false, message: `Error: News by id ${newsId} not found!`, data: []
            })
          }
          let {status} = req.body
          const result = await News.updateStatus(status)
          return res.status(200).json({
            succes: true, message: `News Published!`, data: result
          })
      }catch{
           return res.status(400).json({ success: false, message: `Error: ${error.code}` })
      }
  }
  ,
  updateNews: async (req, res) => {
    try {
      let { newsId } = req.params
      const newsCheck = await News.getNewsById(newsId)
      if (!newsCheck.length) {
        return res.status(400).json({
          success: false, message: `Error: News by id ${newsId} not found!`, data: []
        })
      }
      let { categoryId, title, content, status, newsImage } = req.body
      if (req.decodeToken.role === 'writer') {
        if (status) {
          return res.status(400).json({ success: false, message: `Error: Writer can't update status` })
        }
      }
      newsImage = req.file ? req.file.filename : newsCheck[0].newsImage
      if (!categoryId && !title && !content && newsImage === newsCheck[0].newsImage) {
        return res.status(400).json({ success: false, message: `Error: Nothing updated`, data: [] })
      }
      let setData = {
        ...req.body, newsImage, updated_at: new Date(Date.now())
      }
      
      const result = await News.updateNews(setData, newsId)
      return res.status(200).json({
        succes: true, message: `Success update movie`, data: result
      })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}` })
    }
  },
  deleteNews: async (req, res) => {
    try {
      const { newsId } = req.params
      const newsCheck = await News.getNewsById(newsId)
      if (!newsCheck.length) {
        return res.status(404).json({
          success: false, message: `News by id ${newsId} not found!`, data: []
        }
        )
      }
      const result = await News.deleteNews(newsId)
      return res.status(200).json({
        succes: true, message: `Success delete news`, data: result
      })
    } catch (error) {
      return res.status(400).json({ success: false, message: `Error: ${error.code}` })
    }
  }
}