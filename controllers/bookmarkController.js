const {getAllBookmark, getBookmarkByUsers, addBookmark, updateBookmark, deleteBookmark} = require('../models/bookmarks')

const getAll = async (req, res) => {
    try {
        const results = await getAllBookmark(req, res)
        return res.status(200).send(results)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getByUsers = async (req, res) => {
    try {
        const results = await getBookmarkByUsers(req, res)
        return res.status(200).send(results)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const add = async (req, res) => {
    try {
        const results = await addBookmark(req, res)
        return res.status(200).send(results)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const update = async (req, res) => {
    try {
        const results = await updateBookmark(req, res)
        return res.status(200).send(results)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const deleteBookmark = async (req, res) => {
    try {
        const results = await deleteBookmark(req, res)
        return res.status(200).send(results)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {getAll, getByUsers, add, update, deleteBookmark}