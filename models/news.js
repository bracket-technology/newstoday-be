const db = require('../helpers/db_conn')
const CryptoJS = require("crypto-js")
const fs = require('fs')

module.exports = {
  getNewsById: (newsId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT n.userId, u.name,u.userImage,c.categoryName,n.title,n.descriptionNews,n.content,n.newsImage,n.created_at FROM news n JOIN users u ON n.userId=u.userId JOIN category c ON n.categoryId=c.categoryId WHERE n.newsId=?`, newsId, (err, result) => {
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
      const dbQuery = db.query(`SELECT n.userId, u.name,u.userImage,c.categoryName,n.title,n.descriptionNews,n.content,n.newsImage,n.created_at FROM news n JOIN users u ON n.userId=u.userId JOIN category c ON n.categoryId=c.categoryId WHERE n.categoryId=? ORDER BY title ${orderBy} LIMIT ${limit} OFFSET ${offset}`, categoryId, (err, result) => {
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
  countAllNewsPub: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) AS total FROM news WHERE status='publish'`, (err, result) => {
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
  countAllNewsRev: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) AS total FROM news WHERE status='review'`, (err, result) => {
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
      db.query(`SELECT n.newsId,u.name,u.userImage,c.categoryName,n.title,n.descriptionNews,n.content,n.newsImage,n.created_at FROM news n JOIN users u ON n.userId=u.userId JOIN category c ON n.categoryId=c.categoryId WHERE title LIKE '%${search}%' ORDER BY newsId ${orderBy} LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
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
  getAllNewsByPub: (search, orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT n.newsId,u.name,u.userImage,c.categoryName,n.title,n.descriptionNews,n.content,n.newsImage,n.created_at FROM news n JOIN users u ON n.userId=u.userId JOIN category c ON n.categoryId=c.categoryId WHERE title LIKE '%${search}%' AND status='publish' ORDER BY newsId ${orderBy} LIMIT ${limit} OFFSET ${offset} `, (err, result) => {
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
  getAllNewsByRev: (search, orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT n.newsId,u.name,u.userImage,c.categoryName,n.title,n.descriptionNews,n.content,n.newsImage,n.created_at FROM news n JOIN users u ON n.userId=u.userId JOIN category c ON n.categoryId=c.categoryId WHERE title LIKE '%${search}%' AND status='review' ORDER BY newsId ${orderBy} LIMIT ${limit} OFFSET ${offset} `, (err, result) => {
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
  updateStatus: (newsId,status) => {
      return new Promise((resolve,reject) =>{
          db.query(`UPDATE news SET status= ? where newsId = ?`,[status,newsId],(err)=>{
            if (err) {
              reject({
                success: false, message: err.sqlMessage, data: {
                  errCode: err.code, errNo: err.errno
                }
              })
            }
            resolve(`News Publihed!`)
          })
      })
  }
  ,
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