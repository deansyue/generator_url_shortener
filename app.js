// require relation modules
const express = require('express')
const exphbs = require('express-handlebars')

// require router
const routes = require('./routes/index')

// loading express
const app = express()

// set port
const PORT = 3000

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