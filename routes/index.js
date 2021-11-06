const express = require('express')

const router = express.Router()

const home = require('./modules/home')
const Generator_URL_Shortener = require('./modules/Generator_URL_Shortener')

//與資料庫連線
require('../config/mongoose')

// 定義路由
router.use('/', home)
router.use('/Generator_URL_Shortener', Generator_URL_Shortener)

// export module
module.exports = router