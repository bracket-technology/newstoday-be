const Category = require('../models/category')

module.exports = {
    getAllCategory: async (req, res) => {
        try {
            const results = await Category.getAll(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const results = await Category.getById(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    addCategory: async (req, res) => {
        try {
            const reqModified = {
                ...req,
                body: { ...req.body, categoryImage: req.file.filename }
            }
            const results = await Category.add(reqModified, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    updateCategory: async (req, res) => {
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
                            categoryImage: req.file.filename
                        }
                    }
                }
            }
            const results = await Category.update(reqModified, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const results = await Category.remove(req, res)
            return res.status(200).send(results)
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}