// require relation modules
const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

// require export module
const urlShortener = require('./models/url_shortener')
const generatorUrlData = require('./public/javascripts/generatorUrlData')

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

// direct home page
app.get('/', (req, res) => {
  res.render('index')
})

// router of clicked submit in index page
app.post('/Generator_URL_Shortener', (req, res) => {

  // create object for given url_source and add shortenerID
  const shortenerUrlData = {
    url_source: req.body.url_source,
  }

  // 在資料庫尋找是否有一樣的網址，沒有則先新增短網址ID，並在資料庫新增資料後render result頁面，要是有則直接render result頁面
  urlShortener.find(shortenerUrlData)
    .lean()
    .then(urlData => {

      if (urlData.length === 0) {
        // add shortenID
        generatorUrlData(shortenerUrlData)

        return urlShortener.create(shortenerUrlData)
          .then(() => res.render('/Generator_URL_Shortener/result', { shortenerUrlData }))
          .catch(error => console.log(error))

      } else {

        res.render('/Generator_URL_Shortener/result', { shortenerUrlData: urlData })
      }
    })
    .catch(error => console.log(error))

})

// monitor sever
app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})