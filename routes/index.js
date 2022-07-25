const express = require("express");
const app = express()
const usersRoutes = require('./usersRoutes')
const authRoutes = require('./authRoutes')
const newsRouters = require('./newsRoutes')
const categoryRoutes = require('./categoryRoutes')
const likesRoutes = require('./likesRoutes')
const { isLogin, isAdmin } = require('../middlewares/auth')


app.use('/users', isLogin, usersRoutes)
app.use('/auth', authRoutes)
app.use('/news', isLogin, newsRouters)
app.use('/category', isLogin, isAdmin, categoryRoutes)
app.use('/likes', isLogin, likesRoutes)





module.exports = app




