const mongoose = require('mongoose')

// connect mongodb adn return connection status
mongoose.connect('mongodb://localhost/url_shortener')

const dbStatus = mongoose.connection

dbStatus.on('error', () => console.log('mongodb connect error!'))

dbStatus.once('open', () => console.log('mongodb connect!'))