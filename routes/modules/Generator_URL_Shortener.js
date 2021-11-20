
const express = require('express')

const router = express.Router()

const urlShortener = require('../../models/url_shortener')
const generatorUrlData = require('../../utils/generatorUrlData')

// router of clicked submit in index page
router.post('/', (req, res) => {

  // create object for given url_source and add shortenerID
  const shortenerUrlData = {
    url_source: req.body.url_source,
  }

  // 先使用mongoose傳回全部資料， 再比對是否有一樣的url_source，若無再產生shortenID再判斷是否有重覆的shortenID，若有則回傳資料庫的shortenID
  return urlShortener.find()
    .lean()
    .then(urlDatas => {
      const urlSourceData = urlDatas.find(urlData => urlData.url_source === shortenerUrlData.url_source)

      if (!urlSourceData) {
        // add shortenID
        do {
          generatorUrlData(shortenerUrlData)
        } while (urlDatas.find(urlData => urlData.shortenerID === shortenerUrlData.shortenerID) !== undefined)

        urlShortener.create(shortenerUrlData)
          .catch(error => console.log(error))

      } else {
        shortenerUrlData.shortenerID = urlSourceData.shortenerID
      }
    })
    .then(() => res.render('result', { shortenerUrlData }))
    .catch(error => console.log(error))

})

// export module
module.exports = router