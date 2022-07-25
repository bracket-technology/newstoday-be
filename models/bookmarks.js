const db = require("../helpers/db_conn")
const fs = require("fs")
const tb_bookmark = "bookmarks"
const tb_news = "news"

const getAllBookmark = (req, res) => {
	return new Promise((resolve, reject) => {
		const { userId } = req.params
		const sqlQuery = `SELECT * FROM ${tb_bookmark}`
		db.query(sqlQuery, (err, results) => {
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

const getBookmarkByUsers = (req, res) => {
	return new Promise((resolve, reject) => {
		const sqlQuery = `SELECT a.*, b.title, b.content, b.newsImage from ${tb_bookmark} AS a JOIN ${tb_news} AS b WHERE a.userId=b.id`
		db.query(sqlQuery, (err, results) => {
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

const addBookmark = (req, res) => {
	return new Promise((resolve, reject) => {
		const { userId, newsId } = req.body
		const sqlQuery = `INSERT INTO ${tb_bookmark} (userId, newsId) VALUES ('${userId}', '${newsId}')`
		db.query(sqlQuery, (err, results) => {
			if (err) {
				reject({
					success: false,
					message: `Error: ${err.code}`,
					data: [],
				})
			} else {
				resolve({
					success: true,
					message: "Success add data",
					data: results,
				})
			}
		})
	})
}

const updateBookmark = (req, res) => {
	const { bookmarkId } = req.params
	return new Promise((resolve, reject) => {
		const sqlQuery = `SELECT * FROM ${tb_bookmark} WHERE bookmarkId = '${bookmarkId}'`
		db.query(sqlQuery, (err, results) => {
			if (err) {
				reject({
					success: false,
					message: `Error: ${err.code}`,
					data: [],
				})
			} else if (results.length === 0) {
				reject({
					success: false,
					message: "Data not found",
					data: [],
				})
			} else {
				const sqlQuery = `UPDATE ${tb_bookmark} SET userId = '${req.body.userId}', newsId = '${req.body.newsId}' WHERE bookmarkId = '${bookmarkId}'`
				db.query(sqlQuery, (err, results) => {
					if (err) {
						reject({
							success: false,
							message: `Error: ${err.code}`,
							data: [],
						})
					} else {
						resolve({
							success: true,
							message: "Success update data",
							data: [],
						})
					}
				})
			}
		})
	})
}

const deleteBookmark = (req, res) => {
	const { bookmarkId } = req.params
	return new Promise((resolve, reject) => {
		const sqlQuery = `DELETE FROM ${tb_bookmark} WHERE bookmarkId = '${bookmarkId}'`
		db.query(sqlQuery, (err, results) => {
			if (err) {
				reject({
					success: false,
					message: `Error: ${err.code}`,
					data: [],
				})
			} else {
				resolve({
					success: true,
					message: "Success delete data",
					data: [],
				})
			}
		})
	})
}

module.exports = {
	getAllBookmark,
	getBookmarkByUsers,
	addBookmark,
	updateBookmark,
	deleteBookmark,
}
