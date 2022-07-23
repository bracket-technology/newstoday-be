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

}