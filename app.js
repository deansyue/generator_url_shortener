// require relation modules
const express = require('express')
const exphbs = require('express-handlebars')

// loading express
const app = express()

// set port
const PORT = 3000

// set handlebars layout
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// direct home page
app.get('/', (req, res) => {
  res.render('index')
})

// monitor sever
app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})