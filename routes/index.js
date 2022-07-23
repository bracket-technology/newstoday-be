const express = require("express");
const app = express()
const usersRoutes = require('./usersRoutes')
const authRoutes = require('./authRoutes')
const newsRouters = require('./newsRoutes')
const { isLogin } = require('../middlewares/auth')

app.use('/users', usersRoutes)
app.use('/auth', authRoutes)
app.use('/news', isLogin, newsRouters)






module.exports = app




