const db = require('../helpers/db_conn')

module.exports = {
  addComment: (setData) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`INSERT INTO comments SET ?`, setData, (err, result) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve({
          ...setData
        })
      })
    })
  },
  getAllByNewsId: (newsId, limit, offset) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`SELECT u.name, n.title, c.comment FROM comments c JOIN users u ON c.userId=u.userId JOIN news n ON c.newsId=n.newsId WHERE c.newsId=? LIMIT ${limit} OFFSET ${offset}`, newsId, (err, result) => {
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
  countCommentByNewsId: (newsId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(*) AS total FROM comments WHERE newsId=?`, newsId, (err, result) => {
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
  getCommentByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT u.name, n.title, c.comment FROM comments c JOIN users u ON c.userId=u.userId JOIN news n ON c.newsId=n.newsId WHERE c.userId=?`, userId, (err, result) => {
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
  deleteComment: (commentId) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM comments WHERE commentId=?`, commentId, (err, results) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve(results)
      })
    })
  }
}