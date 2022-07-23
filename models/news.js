const db = require('../helpers/db_conn')
const CryptoJS = require("crypto-js")
const fs = require('fs')

module.exports = {
  getNewsById: (newsId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT u.name,c.categoryName,n.title,n.content,n.newsImage FROM news n JOIN users u ON n.userId=u.userId JOIN category c ON n.categoryId=c.categoryId WHERE n.newsId=?`, newsId, (err, result) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve(result)
      })
    })
  },
  getNewsByCategory: (orderBy, limit, offset, categoryId) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`SELECT u.name,c.categoryName,n.title,n.content,n.newsImage FROM news n JOIN users u ON n.userId=u.userId JOIN category c ON n.categoryId=c.categoryId WHERE n.categoryId=? ORDER BY title ${orderBy} LIMIT ${limit} OFFSET ${offset}`, categoryId, (err, result) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve(result)
      })
    })
  },
  countAllNewsByCategory: (categoryId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) AS total FROM news WHERE categoryId=?`, categoryId, (err, result) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve(result)
      })
    })
  },
  countAllNews: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) AS total FROM news`, (err, result) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve(result)
      })
    })
  },
  getAllNews: (search, orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT u.name,c.categoryName,n.title,n.content,n.newsImage FROM news n JOIN users u ON n.userId=u.userId JOIN category c ON n.categoryId=c.categoryId WHERE title LIKE '%${search}%' ORDER BY title ${orderBy} LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve(result)
      })
    })
  },
  postArticle: (data) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`INSERT INTO news SET ?`, data, (err, results) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve({
          newsId: results.insertId,
          ...data
        }
        )
      })
    })
  },
  updateNews: (setData, newsId) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`UPDATE news SET ? WHERE newsId = ?`, [setData, newsId], (err) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve({
          newsId,
          ...setData,
        })
      })
    })
  },
  deleteNews: (newsId) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM news WHERE newsId=?`, newsId, (err) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve(`Delete news by id ${newsId}`)
      })
    })
  }
}