const Users = require('../models/users')

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const results = await Users.getByAdmin(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    getEmail: async (req, res) => {
        try {
            const results = await Users.getByUsers(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    updatePassword: async (req, res) => {
        try {
            const results = await Users.updatePasswordByUser(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    updateUser: async (req, res) => {
        try {
            let reqModified = {
                ...req
            }
            if (req.file) {
                if (req.file !== null && req.file !== '') {
                    reqModified = {
                        ...req,
                        body: {
                            ...req.body,
                            userImage: req.file.filename
                        }
                    }
                }
            }
            const results = await Users.updateByUsers(reqModified, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    updateAdmin: async (req, res) => {
        try {
            let reqModified = {
                ...req
            }
            if (req.file) {
                if (req.file !== null && req.file !== '') {
                    reqModified = {
                        ...req,
                        body: {
                            ...req.body,
                            userImage: req.file.filename
                        }
                    }
                }
            }
            const results = await Users.updateByAdmin(reqModified, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    requestAuthor: async (req, res) => {
        try {
            let { userId } = req.params
            const { request } = req.body
            const results = await Users.requestAuthor(request, userId)
            return res.status(200).json({ success: true, message: "Success request to be author" })
        } catch (error) {
            return res.status(400).json({ success: false, message: `Error: ${error.message}` })
        }
    },
    getUsersReqAuthor: async (req, res) => {
        try {
            const results = await Users.getUsersReqAuthor()
            return res.status(200).json({ success: true, message: "Success get all users who request to be author", data: results })
        } catch (error) {
            return res.status(400).json({ success: false, message: `Error: ${error.message}` })
        }
    },
    accAuthorByAdmin: async (req, res) => {
        try {
            const { userId } = req.params
            let { role } = req.body
            const results = await Users.accAuthorByAdmin(role, userId)
            return res.status(200).json({ success: true, message: `success make userID ${userId} an author` })
        } catch (error) {
            return res.status(400).json({ success: false, message: `Error: ${error.message}` })
        }
    },
    deleteUser: async (req, res) => {
        try {
            const results = await Users.deleteByAdmin(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },

}