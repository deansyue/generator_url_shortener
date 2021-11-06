// require relation modules
const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

// require router
const routes = require('./routes/index')

// loading express
const app = express()

// set port
const PORT = 3000

// connect mongodb adn return connection status
mongoose.connect('mongodb://localhost/url_shortener')

const dbStatus = mongoose.connection

dbStatus.on('error', () => console.log('mongodb connect error!'))

dbStatus.once('open', () => console.log('mongodb connect!'))

// set handlebars layout
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// use express static and body-parser
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(routes)

// monitor sever
app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})