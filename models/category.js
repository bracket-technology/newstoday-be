const db = require('../helpers/db_conn');
const fs = require('fs');


module.exports = {
    getAll: (req, res) => {
        const { categoryId } = req.body
        const { search, orderBy } = req.query
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const offset = (page - 1) * limit
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM category ${categoryId ? `WHERE categoryId LIKE '%${categoryId}%'` : search ? `WHERE categoryName LIKE '%${search}%' OR categoryImage LIKE '%${search}%' ` : orderBy ? `ORDER BY categoryId ${orderBy}` : ''} ${page && limit ? `LIMIT ${limit} OFFSET ${offset}` : ''}`
            db.query(sql, (err, results) => {
                if (err) {
                    reject({
                        success: false,
                        message: `Error: ${err.code}`,
                        data: []
                    })
                } else {
                    db.query(`SELECT categoryId from category`, (err, results1) => {
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
    getById: (req, res) => {
        const { categoryId } = req.params
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM category WHERE categoryId = '${categoryId}'`
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
                        message: "Success get data",
                        data: results
                    })
                }
            })
        })
    }
    ,
    add: (req, res) => {
        return new Promise((resolve, reject) => {
            const { categoryName, categoryImage } = req.body
            const sql = `INSERT INTO category (categoryName, categoryImage) VALUES ('${categoryName}', '${categoryImage}')`
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
                        message: "Success add data",
                        data: results
                    })
                }
            })
        })
    },
    update: (req, res) => {
        const { categoryId } = req.params
        return new Promise((resolve, reject) => {
            const dbSQL = `SELECT * FROM category WHERE categoryId = '${categoryId}'`
            db.query(dbSQL, (err, results) => {
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
                        message: "Data not found",
                        data: []
                    })
                } else {

                    let prevData = {
                        ...results[0],
                        ...req.body,
                        categoryImage: results[0].categoryImage
                    }
                    if (req.body.categoryImage) {
                        if (results[0].categoryImage !== req.body.categoryImage) {
                            fs.unlink(`uploads/category/${results[0].categoryImage}`, (err) => {
                                if (err) {
                                    reject({
                                        success: false,
                                        message: `Error: ${err.code}`,
                                        data: []
                                    })
                                }
                            })
                            prevData = {
                                ...prevData,
                                categoryImage: req.file.filename
                            }
                        }
                    }
                    const { categoryName, categoryImage } = prevData
                    const sql = `UPDATE category SET categoryName = '${categoryName}', categoryImage = '${categoryImage}' WHERE categoryId = '${categoryId}'`
                    db.query(sql, (err, results) => {
                        if (err) {
                            reject({
                                success: false,
                                message: `Error: ${err.code}`,
                                data: []
                            })
                        }
                        resolve({
                            success: true,
                            message: "Success update data",
                            data: results
                        })

                    })
                }
            })
        })

    },
    remove: (req, res) => {
        return new Promise((resolve, reject) => {
            const { categoryId } = req.params
            const dbSQL = `SELECT categoryId, categoryImage FROM category WHERE categoryId = '${categoryId}'`
            db.query(dbSQL, (err, results) => {
                if (err) {
                    reject({
                        success: false,
                        message: `error: ${err.code}`,
                        data: []
                    })
                }
                if (results.length === 0) {
                    reject({
                        success: false,
                        message: `category not found`,
                    })
                } else {
                    const imagetmp = results[0].categoryImage
                    const sql = `DELETE FROM category WHERE categoryId = '${categoryId}'`
                    db.query(sql, (err, results) => {
                        if (err) {
                            reject({
                                success: false,
                                message: `error: ${err.code}`,
                                data: []
                            })
                        } else {
                            fs.unlink(`uploads/category/${imagetmp}`, (err) => {
                                if (err) {
                                    reject({
                                        success: false,
                                        message: `error: ${err.code}`,
                                        data: []
                                    })
                                }
                                resolve({
                                    success: true,
                                    message: 'delete user success',
                                    data: []
                                })
                            })
                        }
                    })
                }
            })
        })
    }
}