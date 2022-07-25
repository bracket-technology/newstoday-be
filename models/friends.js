const db = require('../helpers/db_conn')

module.exports = {
  requestFollowByFollowerId: (setData) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO friends SET ?`, setData, (err, results) => {
        if (err) {
          reject({
            success: false, message: err.sqlMessage, data: {
              errCode: err.code, errNo: err.errno
            }
          })
        }
        resolve({
          friendId: results.insertId,
          ...setData
        })
      })
    })
  },
  accFollowByUserId: (setData, userId, followerId) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`UPDATE friends SET ? WHERE userId='${userId}' AND followerId=${followerId}`, setData, (err, results) => {
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
  unfollowByFollowerId: (userId, followerId) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM friends WHERE userId='${userId}' AND followerId=${followerId} `, (err, results) => {
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