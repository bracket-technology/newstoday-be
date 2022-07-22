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
    deleteUser: async (req, res) => {
        try {
            const results = await Users.deleteByAdmin(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}