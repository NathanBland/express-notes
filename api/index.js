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
const helmet = require('helmet')

// =======================
// configuration =========
// =======================
const port = process.env.PORT || 8000
const server = require('http').Server(app)
mongoose.Promise = global.Promise
mongoose.connect(process.env.dbURL || config.database || 'mongodb://localhost:27017/express-notes') // connect to database

app.use(express.static('public'))
app.use(helmet())
app.disable('x-powered-by')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.NODE_ENV === 'production' ? 'https://nathanbland.github.io/express-notes/' : 'http://127.0.0.1:3000')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, PATCH')
  next()
})

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
    return res.send('welcome to the api')
})

app.use('/api', routes(express))

app.get('*/*', (req, res, next) => {
  return res.status(404).json({msg: 'invalid endpoint'})
})

server.listen(port)
console.log('Magic happens at http://localhost:' + port)
