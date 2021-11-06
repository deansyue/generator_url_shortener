const express = require('express')

const router = express.Router()

const urlShortener = require('../../models/url_shortener')

// direct home page
router.get('/', (req, res) => {
  res.render('index')
})

// 使用者使用短網址後連接的路由， 若有該短網址則連通至指定網址，若無則指向本專案首頁
router.get('/:shortenerID', (req, res) => {
  const shortenerID = req.params.shortenerID
  return urlShortener.findOne({ shortenerID })
    .lean()
    .then(urlData => {
      if (urlData) {
        res.redirect(urlData.url_source)
      } else {
        res.redirect('/')
      }
    })
})

// export module
module.exports = router
