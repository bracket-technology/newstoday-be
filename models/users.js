const db = require('../helpers/db_conn')
const fs = require('fs')

module.exports = {
    //referensi search github movie(dhani)
    getByAdmin: (req, res)=> {
        const { search, date, orderBy } = req.query
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        // const yearNow = new Date().getFullYear()
        const offset = (page - 1) * limit

        return new Promise((resolve, reject)=> {
            const sql = `SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`
            db.query(sql,(err, results)=> {
            if(err) {
                reject({message: "ada error"})
            }
            resolve({
                message: "get all users success",
                status: 200,
                data: results
            })
        })
        })
    },
    getByUsers: (req, res) => {
        return new Promise((resolve, reject)=> {
            const {email} = req.query
            const sql = `SELECT * FROM users WHERE email = '${email}'`
            db.query(sql,(err, results) => {
            if(err || results.length === 0) {
                reject({
                    success: false,
                    message: `email not found`,
                    data: []
                })
            }
            else {
                resolve({
                    success: true,
                    message: 'get email success',
                    data: {
                        email: email,
                    }
                })
            }
            })
        })
    },
    // update user without role, dan password
    updateByUsers: (req, res) => {
        return new Promise((resolve, reject)=> {
            const {email} = req.body
            const sql = `UPDATE users SET email = '${email}' WHERE email = '${email}'`
            db.query(sql,(err, results)=> {
            if (err) {
                reject({
                    success: false,
                    message: `email or password not found`,
                    data: []
                })
            } else {
                resolve({
                    success: true,
                    message: 'update password success',
                    data: {
                        password: password,
                    }
                })
            }
        })
        })
    },
    updateByAdmin: (req, res) => {
        return new Promise((resolve, reject)=> {
            const {userId, username, name, email, phone, job, description, userImage} = req.body
            const dbSQL = `SELECT * FROM users WHERE userId = '${userId}'`
            db.query(dbSQL,(err, results)=> {
                if(err) {
                    reject({
                        success: false,
                        status: 500,
                        message: `error get user`,
                        data: {
                            error: err
                        }
                    })
                } else if(results.length === 0) {
                    reject({
                        success: false,
                        status: 400,
                        message: `Bad request, user not found`,
                    })
                } else {
                    let prevData = {
                        ...results[0],
                        userId: results[0].userId,
                        userImage: results[0].userImage,
                        ...req.body
                    } 
                    if(results[0].userImage !== req.body.userImage) {
                    fs.unlink(`uploads/${results[0].userImage}`), (err)=> {
                        if(err) {
                            reject({
                                success: false,
                                status: 500,
                                message: err,
                            })
                        }
                    }
                    prevData = {
                        ...prevData,
                        userImage: req.body.userImage
                    }
                }
                } 
                
            })
            const sql = `UPDATE users SET username = '${username}', name= '${name}', email = '${email}', phone = '${phone}', job = '${job}', description = '${description}', userImage = '${userImage}' WHERE email = '${email}'`
            db.query(sql,(err, results)=> {
            if(err) {
                reject({
                    success: false,
                    message: `error updating users`,
                    data: []
                })
            } else {
                resolve({
                    success: true,
                    message: 'update users success',
                    data: results
                })
            }
        })
        })
    },
    deleteByAdmin: (req, res) => {
        return new Promise((resolve, reject)=> {
            const {email} = req.query
            const sql = `DELETE FROM users WHERE email = '${email}'`
            db.query(sql,(err, results)=> {
            if(err) {
                reject({
                    success: false,
                    message: `error deleting users`,
                    data: []
                })
            } else {
                resolve({
                    success: true,
                    message: 'delete users success',
                    data: results
                })
            }
        })
        })
    }
}