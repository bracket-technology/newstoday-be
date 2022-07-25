const express = require("express");
const app = express()
const usersRoutes = require('./usersRoutes')
const authRoutes = require('./authRoutes')
const newsRouters = require('./newsRoutes')
const categoryRoutes = require('./categoryRoutes')
const bookmarkRoutes = require('./bookmarkRoutes')
const { isLogin, isAdmin } = require('../middlewares/auth')
const commentRoutes = require('./commentsRoutes')
const friendsRoutes = require('./friendsRoutes')



app.use('/users', isLogin, usersRoutes)
app.use('/auth', authRoutes)
app.use('/category', isLogin, isAdmin, categoryRoutes)
app.use('/bookmark', isLogin, bookmarkRoutes)


app.use('/news', newsRouters)
app.use('/category', isLogin, isAdmin, categoryRoutes)
app.use('/comments', isLogin, commentRoutes)
app.use('/friends', isLogin, friendsRoutes)




module.exports = app




