const express = require("express");
const app = express()
const usersRoutes = require('./usersRoutes')
const authRoutes = require('./authRoutes')
const newsRouters = require('./newsRoutes')
const categoryRoutes = require('./categoryRoutes')
const commentRoutes = require('./commentsRoutes')
const friendsRoutes = require('./friendsRoutes')
const { isLogin, isAdmin } = require('../middlewares/auth')



app.use('/users', isLogin, usersRoutes)
app.use('/auth', authRoutes)
app.use('/news', newsRouters)
app.use('/category', isLogin, isAdmin, categoryRoutes)
app.use('/comments', isLogin, commentRoutes)
app.use('/friends', isLogin, friendsRoutes)




module.exports = app




