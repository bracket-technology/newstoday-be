const Users = require('../models/users')

module.exports = {
    getAllUsers: async (req, res)=> {
        try {
            const results = await Users.get(req, res)
            res.status(200).send(results)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}