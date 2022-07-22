const db = require("../helpers/db_conn")
const CryptoJS = require("crypto-js")
const fs = require("fs")
const tb_bookmark = "bookmarks"
const tb_news = "news"

const getAllBookmark = (req, res) => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM ${table}`, (err, results) => {
			if (err) {
				reject({
					success: false,
					status: 500,
					message: `Error: ${err.code}`,
					data: [],
				})
			} else {
				resolve({
					success: true,
					message: "Success get data",
					data: results,
				})
			}
		})
	})
}

const getBookmarkByUser = (req, res) => {
	return new Promise((resolve, reject) => {
		const sql = `SELECT a.*, b.title, b.content, b.newsImage from ${tb_bookmark} AS a JOIN ${tb_news} AS b WHERE a.newsId=b.id`
		db.query(sql, (err, results) => {
			if (err || results.length === 0) {
				reject({
					success: false,
					message: `Error: ${err.code}`,
					data: [],
				})
			} else {
				resolve({
					success: true,
					message: "Success get data",
					data: results,
				})
			}
		})
	})
}
