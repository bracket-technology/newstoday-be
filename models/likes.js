const db = require('../helpers/db_conn');

module.exports = {
    add: (req, res) => {
        const { userId, newsId } = req.body
        return new Promise ((resolve, reject) => {
            const sql = `INSERT INTO likes (userId, newsId) VALUES ('${userId}', '${newsId}')`
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
                        message: "Success create data",
                        data: results
                    })
                }
            })
        })
    }, 
    getByUserId: (req, res) => {
        const { orderBy } = req.query
        const {userId} = req.params
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const offset = (page - 1) * limit
        return new Promise ((resolve, reject) => {
            const sql = `SELECT likes.*, users.name, news.title FROM likes JOIN users JOIN news ON likes.userId=users.userId AND likes.newsId=news.newsId WHERE likes.userId = '${userId}' ORDER BY ${orderBy} likes LIMIT ${limit} OFFSET ${offset}`
            db.query(sql, (err, results) => {
                if (err) {
                    reject({
                        success: false,
                        message: `Error: ${err.code}`,
                        data: []
                    })
                } else {
                    db.query(`SELECT userId from likes`, (err, results1) => {
                        if (err) {
                            reject({
                                success: false,
                                message: `Error: ${err.code}`,
                                data: []
                            })
                        } else {
                            totalPage = Math.ceil(results1.length / limit)
                            if(isNaN(limit) == isNaN(page)) {
                                totalPage = 1
                            } 
                            if (page > totalPage) {
                                reject({
                                    success: false,
                                    message: `Error: Page not found`,
                                    data: []
                                })
                            }
                            resolve({
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
                    }
                )}
            })
        })
    }
    ,
    getByNewsId: (req, res) => {
        const {newsId} = req.params
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const offset = (page - 1) * limit
        return new Promise ((resolve, reject) => {
            const sql = `SELECT likes.*, users.name, news.title FROM likes JOIN users JOIN news ON likes.userId=users.userId AND likes.newsId=news.newsId WHERE likes.news = '${newsId}' LIMIT ${limit} OFFSET ${offset}`
            db.query(sql, (err, results) => {
                if (err) {
                    reject({
                        success: false,
                        message: `Error: ${err.code}`,
                        data: []
                    })
                } else {
                    if (err) {
                        reject({
                            success: false,
                            message: `Error: ${err.code}`,
                            data: []
                        })
                    } else {
                        totalPage = Math.ceil(results1.length / limit)
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
                }
            })
        })
    }, 
    remove: (req, res) => {
        const { likeId } = req.params
        return new Promise ((resolve, reject) => {
            const sql = `DELETE FROM likes WHERE likeId=${likeId}`
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
                        message: "Success delete data",
                        data: results
                    })
                }
            })
        })
    }
}