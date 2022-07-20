const Users = require('../models/users')

module.exports = {
    getAllUsers: async (req, res)=> {
        try {
            const results = await Users.getByAdmin(req, res)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getEmail: async (req, res)=> {
        try {
            const results = await Users.getByUsers(req, res)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    updatePassword: async (req, res)=> {
        try {
            const results = await Users.updateByUsers(req, res)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    updateAdmin: async (req, res)=> {
        try {
            const results = await Users.updateByAdmin(req, res)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    deleteUser: async (req, res)=> {
        try {
            const results = await Users.deleteByAdmin(req, res)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}