const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname)

    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return cb(new Error('Image/path is not allowed'), false)
    }
    cb(null, true)
}

const limits = {
    fileSize: 1024 * 1024 * 2
}

const uploadImages = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits
}).single('image')

const upload = (req, res, next) => {
    uploadImages(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.json({
                success: false,
                message: err.message
            })
        } else if (err) {
            return res.json({
                success: false,
                message: 'Failed to upload image!'
            })
        }
        next()
    })
}


module.exports = upload;