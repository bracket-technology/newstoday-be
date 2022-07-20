const db = require('../helpers/db_conn')

module.exports = {
    get: (req, res)=> {
        return new Promise((resolve, reject)=> {
            const sql = 'SELECT * FROM `users`'
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
    }
}