const express = require("express");
const app = express()
const usersRoutes = require('./usersRoutes')
const authRoutes = require('./authRoutes')
const categoryRoutes = require('./categoryRoutes')
const bookmarkRoutes = require('./bookmarkRoutes')
const {isLogin, isAdmin } = require('../middlewares/auth')


app.use('/users',isLogin, usersRoutes)
app.use('/auth', authRoutes)
app.use('/category',isLogin,isAdmin, categoryRoutes)
app.use('/bookmark',isLogin, bookmarkRoutes)






module.exports = app




