const express = require("express");
const app = express()
const usersRoutes = require('./usersRoutes')
const authRoutes = require('./authRoutes')


app.use('/users', usersRoutes)
app.use('/auth', authRoutes)






module.exports = app




