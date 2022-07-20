const express = require("express");
const app = express()
const usersRoutes = require('./usersRoutes')


app.use('/users', usersRoutes)






module.exports = app




