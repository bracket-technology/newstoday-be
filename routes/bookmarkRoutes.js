const express = require("express")
const router = express.Router()
const { getAll, getByUsers, add, update, deletebookmark } = require('../controllers/bookmarkController')

router.get('/', getAll)
router.get('/:userId', getByUsers)
router.post('/', add)
router.patch('/:bookmarkId', update)
router.delete('/:bookmarkId', deletebookmark)

module.exports = router
