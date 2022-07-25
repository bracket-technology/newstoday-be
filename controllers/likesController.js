const Likes = require('../models/likes')

module.exports = {
    createLikes: async (req, res) => {
        try {
            const results = await Likes.add(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    getLikesByUserId: async (req, res) => {
        try {
            const results = await Likes.getByUserId(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    getLikesByNewsId: async (req, res) => {
        try {
            const results = await Likes.getByNewsId(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    deleteLikes: async (req, res) => {
        try {
            const results = await Likes.remove(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}