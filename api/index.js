// =======================
// get the packages we need ============
// =======================
const express     = require('express')
const app         = express()
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const mongoose    = require('mongoose')
const cookieParser = require('cookie-parser')
const routes      = require('./routes/')
// =======================
// configuration =========
// =======================
const port = process.env.PORT || 8000
const server = require('http').Server(app)
mongoose.Promise = global.Promise
mongoose.connect(process.env.dbURL || config.database || 'mongodb://localhost:27017/express-notes') // connect to database

app.use(express.static('public'))

// use body parser so we can get info from POST and/or URL parameters
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use morgan to log requests to the console
app.use(morgan('dev'))
// =======================
// start the server ======
// =======================
app.get('/', (req, res) => {
    return res.send('Hello! The API is at http://localhost:' + port + '/api')
})

app.use('/api', routes(express))

server.listen(port)
console.log('Magic happens at http://localhost:' + port)
