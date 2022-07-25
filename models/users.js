const db = require('../helpers/db_conn')
const CryptoJS = require("crypto-js")
const fs = require('fs')

module.exports = {
    getByAdmin: (req, res) => {
        const { userId } = req.body
        const { search, orderBy } = req.query
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const offset = (page - 1) * limit
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM users ${userId ? `WHERE userId LIKE '%${userId}%'` : search ? `WHERE username LIKE '%${search}%' OR email LIKE '%${search}%' OR phone LIKE '%${search}%' OR job LIKE '%${search}%'` : orderBy ? `ORDER BY userId ${orderBy}` : ''} ${page && limit ? `LIMIT ${limit} OFFSET ${offset}` : ''}`
            db.query(sql, (err, results) => {
                if (err) {
                    reject({
                        success: false,
                        message: `Error: ${err.code}`,
                        data: []
                    })
                } else {
                    db.query(`SELECT userId from users`, (err, results1) => {
                        if (err) {
                            reject({
                                success: false,
                                message: `Error: ${err.code}`,
                                data: []
                            })
                        } else {
                            totalPage = Math.ceil(results1.length / limit)
                            if (search) {
                                totalPage = Math.ceil(results.length / limit)
                            }
                            if (isNaN(limit) && isNaN(page)) {
                                totalPage = 1
                            }
                            if (page > totalPage) {
                                reject({
                                    success: false,
                                    message: "Page not found",
                                    data: []
                                })
                            } resolve({
                                success: true,
                                message: "Success get data",
                                data: {
                                    totalAllData: results1.length,
                                    totalRows: results.length,
                                    totalPage: totalPage,
                                    results: results
                                }
                            })
                        }
                    })
                }

            })
        })
    },
    getByUsers: (req, res) => {
        return new Promise((resolve, reject) => {
            const { email } = req.query
            const sql = `SELECT * FROM users WHERE email = '${email}'`
            db.query(sql, (err, results) => {
                if (err || results.length === 0) {
                    reject({
                        success: false,
                        message: `user not found`,
                        data: []
                    })
                }
                else {
                    resolve({
                        success: true,
                        message: 'get user success',
                        data: results
                    })
                }
            })
        })
    },
    updatePasswordByUser: (req, res) => {
        const { userId } = req.params
        const { password } = req.body
        return new Promise((resolve, reject) => {
            const hash = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY_CRYPT).toString();
            const sql = `SELECT userId FROM users WHERE userId = '${userId}'`
            db.query(sql, (err, results) => {
                if (err) {
                    reject({
                        success: false,
                        message: `Error: ${err.code}`,
                        data: []
                    })
                }
                if (results.length === 0) {
                    reject({
                        success: false,
                        message: `user not found`,
                        data: []
                    })
                } else {
                    const sql = `UPDATE users SET password = '${hash}' WHERE userId = '${userId}'`
                    db.query(sql, (err, results) => {
                        if (err) {
                            reject({
                                success: false,
                                message: `Error: ${err.code}`,
                                data: []
                            })
                        } else {
                            resolve({
                                success: true,
                                message: 'update password success',
                                data: results
                            })
                        }
                    })
                }
            })
        })
    },
    // update user without role, dan password
    updateByUsers: (req, res) => {
        return new Promise((resolve, reject) => {
            const { userId } = req.params
            const dbSQL = `SELECT * FROM users WHERE userId = '${userId}'`
            db.query(dbSQL, (err, results) => {
                if (err) {
                    reject({
                        success: false,
                        message: `error: ${err.code}`,
                        data: []
                    })
                } else if (results.length === 0) {
                    reject({
                        success: false,
                        message: `user not found`,
                        data: []
                    })
                } else {
                    let prevData = {
                        ...results[0],
                        ...req.body,
                        userImage: results[0].userImage
                    }
                    if (req.body.userImage) {
                        if (results[0].userImage !== req.body.userImage) {
                            fs.unlink(`uploads/${results[0].userImage}`, (err) => {
                                if (err) {
                                    prevData = {
                                        ...prevData,
                                        userImage: req.file.filename
                                    }
                                }
                            })
                            prevData = {
                                ...prevData,
                                userImage: req.file.filename
                            }
                        }
                    }
                    const { username, email, name, phone, job, userImage, description } = prevData
                    const sql = `UPDATE users SET username='${username}', email = '${email}', name = '${name}', phone = '${phone}', job = '${job}', description='${description}', userImage='${userImage}' WHERE userId = '${userId}'`
                    db.query(sql, (error, results) => {
                        if (error) {
                            reject({
                                success: false,
                                message: `error: ${err.code}`,
                                data: []
                            })
                        }
                        resolve({
                            success: true,
                            message: 'update user success',
                            data: results
                        })

                    })
                }
            })
        })
    },
    updateByAdmin: (req, res) => {
        const { userId } = req.params
        return new Promise((resolve, reject) => {
            const dbSQL = `SELECT * FROM users WHERE userId = '${userId}'`
            db.query(dbSQL, (err, results) => {
                if (err) {
                    reject({
                        success: false,
                        message: `error: ${err.code}`,
                        data: []
                    })
                } else if (results.length === 0) {
                    reject({
                        success: false,
                        message: `Bad request, user not found`,
                    })
                } else {
                    let prevData = {
                        ...results[0],
                        ...req.body,
                        userImage: results[0].userImage
                    }
                    if (req.body.userImage) {
                        if (results[0].userImage !== req.body.userImage) {
                            fs.unlink(`uploads/${results[0].userImage}`, (err) => {
                                if (err) {
                                    prevData = {
                                        ...prevData,
                                        userImage: req.file.filename
                                    }
                                }
                            })
                            prevData = {
                                ...prevData,
                                userImage: req.file.filename
                            }
                        }
                    }
                    const { username, name, email, phone, job, description, userImage, isActive } = prevData


                    db.query(`UPDATE users SET username = '${username}', name= '${name}', email = '${email}', phone = '${phone}', job = '${job}', description = '${description}', userImage = '${userImage}', isActive= '${isActive}' WHERE userId = '${userId}'`, (err, results) => {
                        if (err) {
                            reject({
                                success: false,
                                message: `error: ${err.code}`,
                                data: []
                            })
                        }
                        resolve({
                            success: true,
                            message: 'update users success',
                            data: results
                        })
                    })
                }
            })
        })
    },
    requestAuthor: (request, userId) => {
        return new Promise((resolve, reject) => {
            const dbQuery = db.query(`UPDATE users SET request='${request}' WHERE userId=?`, userId, (err, results) => {
                if (err) {
                    reject({
                        success: false, message: err.sqlMessage, data: {
                            errCode: err.code, errNo: err.errno
                        }
                    })
                }
                resolve({
                    userId, request
                })
            })
            console.log(dbQuery.sql)
        })
    },
    getUsersReqAuthor: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT userId,username,name,email,phone,job FROM users WHERE request='1'`, (err, results) => {
                if (err) {
                    reject({
                        success: false, message: err.sqlMessage, data: {
                            errCode: err.code, errNo: err.errno
                        }
                    })
                }
                resolve({
                    results
                })
            })
        })
    },
    accAuthorByAdmin: (role, userId) => {
        return new Promise((resolve, reject) => {
            const dbQuery = db.query(`UPDATE users SET role='${role}' WHERE userId=?`, userId, (err, results) => {
                if (err) {
                    reject({
                        success: false, message: err.sqlMessage, data: {
                            errCode: err.code, errNo: err.errno
                        }
                    })
                }
                resolve({
                    userId, role
                })
            })
            console.log(dbQuery.sql)
        })
    },
    deleteByAdmin: (req, res) => {
        return new Promise((resolve, reject) => {
            const { userId } = req.params
            const dbSQL = `SELECT userId, userImage FROM users WHERE userId = '${userId}'`
            db.query(dbSQL, (err, results) => {
                if (err) {
                    reject({
                        success: false,
                        message: `error: ${err.code}`,
                        data: []
                    })
                } else if (results.length === 0) {
                    reject({
                        success: false,
                        message: `user not found`,
                    })
                } else {
                    const imagetmp = results[0].userImage
                    const sql = `DELETE FROM users WHERE userId = '${userId}'`
                    db.query(sql, (err, results) => {
                        if (err) {
                            reject({
                                success: false,
                                message: `error: ${err.code}`,
                                data: []
                            })
                        } else {
                            fs.unlink(`uploads/${imagetmp}`, (err) => {
                                if (err) {
                                    prevData = {
                                        ...prevData,
                                        userImage: req.file.filename
                                    }
                                }
                                resolve({
                                    success: true,
                                    message: 'delete user success',
                                    data: results
                                })
                            })
                        }
                    })
                }
            })
        })
    }
}