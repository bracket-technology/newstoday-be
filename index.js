require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes')
const path = require('path')
const { format, transports } = require('winston'), expressWinston = require('express-winston')
const { timestamp, combine, errors, json } = format
const port = process.env.PORT || 3000


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
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
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api/v1', router)

app.get('/', (req, res) => res.send('Services working perfectly.'))

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})