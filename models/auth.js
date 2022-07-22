const db = require('../helpers/db_conn')
const CryptoJS = require("crypto-js");

module.exports = {
  register: (email, phone, password, code, userImage) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`INSERT INTO users(email, phone, password, code,userImage) VALUES( '${email}', '${phone}','${password}','${code}','${userImage}')`, (error, result) => {
        if (error) {
          if (error.code == 'ER_DUP_ENTRY') {
            reject({
              message: 'Email already exists, please login!',
            })
          } else {
            reject({
              message: error.sqlMessage,
            })
          }
        }
        resolve({
          email, phone
        })
      })
    })
  },
  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`SELECT email, code FROM users WHERE email='${email}'`, (error, result) => {
        if (error) {
          reject({
            success: false, message: error.sqlMessage
          })
        }
        resolve(
          result
        )
      })
    })
  },
  verify: (email) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`UPDATE users SET isActive='active',code='' WHERE email='${email}'`, (error, result) => {
        if (error) {
          reject({
            success: false,
            message: error.sqlMessage,
          })
        }
        resolve(result)
      })
    })
  },
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`SELECT userId, email, password, userImage, role FROM users WHERE email='${email}'`, (error, result) => {
        if (error) {
          reject({
            success: false,
            message: error.sqlMessage,
          })
        }
        resolve(result)
      })
    })
  },
  forgotPass: (email, code) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE users set code='${code}' WHERE email='${email}'`, (error, result) => {
        if (error) {
          reject({
            success: false,
            message: error.sqlMessage,
          })
        }
        resolve({
          success: true,
          message: 'Successfully sent forgot-password!',
        })
      })
    })
  },
  updatePassword: (email, password) => {
    return new Promise((resolve, reject) => {
      const dbQuery = db.query(`UPDATE users SET password = '${password}' WHERE email = '${email}'`, (error, result) => {
        if (error) {
          reject({
            success: false,
            message: error.sqlMessage,
          })
        }
        resolve(result)
      })
      // console.log(dbQuery.sql)
    })
  },
}