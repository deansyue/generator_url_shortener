
const express = require('express')

const router = express.Router()

const urlShortener = require('../../models/url_shortener')
const generatorUrlData = require('../../public/javascripts/generatorUrlData')

// router of clicked submit in index page
router.post('/', (req, res) => {

  // create object for given url_source and add shortenerID
  const shortenerUrlData = {
    url_source: req.body.url_source,
  }

  // 在資料庫尋找是否有一樣的網址，沒有則先新增短網址ID，並在資料庫新增資料後render result頁面，要是有則直接render result頁面
  urlShortener.findOne(shortenerUrlData)
    .lean()
    .then(urlData => {

      if (urlData === null) {
        // add shortenID
        generatorUrlData(shortenerUrlData)

        urlShortener.create(shortenerUrlData)
          .catch(error => console.log(error))

      } else {
        shortenerUrlData.shortenerID = urlData.shortenerID
      }
    })
    .then(() => res.render('result', { shortenerUrlData }))
    .catch(error => console.log(error))

})

// export module
module.exports = router