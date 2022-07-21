const db = require('../helpers/db_conn')
const CryptoJS = require("crypto-js");
const { error } = require('winston');

module.exports = {
  register: (email, phone, password, code, userImage) => {
    return new Promise((resolve, reject) => {
      const hash = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY_CRYPT).toString();
      const dbQuery = db.query(`INSERT INTO users(email, phone, password,code,userImage) VALUES( '${email}', '${phone}','${hash}','${code}','${userImage}')`, (error, result) => {
        if (error) {
          reject(new Error(`${error.sqlMessage}`))
        }
        resolve({
          email, phone, hash
        })
      })
      // console.log(dbQuery.sql)
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
      // console.log(dbQuery.sql)
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
        resolve({
          success: true,
          message: 'Successfully verified!',
        })
      })
      // console.log(dbQuery.sql)
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
      console.log(dbQuery.sql)
    })
  }
}