require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require('cors')
const path = require('path')
const { format, transports } = require('winston'), expressWinston = require('express-winston')
const { timestamp, combine, errors, json } = format



app.use(cors())
app.use(bodyParser.json())
app.use(expressWinston.logger({
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), json()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/app.log' })
  ],
  msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
  expressFormat: false,
  meta: false,
  statusLevels: true,
  ignoreRoute: function (req, res) { return false; }
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api/v1', router)



app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})