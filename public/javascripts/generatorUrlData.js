// create used letter and number for url_ID and extract radom letter for shortenerID of shortenerUrlData
function Generator_URL_Shortener(shortenerUrlData) {
  let lowerCaseLetter = 'abcdedfghijklmnopqrstuvwxyz'
  let upperCaseLetter = lowerCaseLetter.toUpperCase()
  let number = '1234567890'

  let collection = []
  collection = collection.concat(lowerCaseLetter.split(''), upperCaseLetter.split(''), number.split(''))
  let shortenerID = ''

  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    shortenerID += collection[randomIndex]
  }

  shortenerUrlData.shortenerID = shortenerID
  return

}

// export module
module.exports = Generator_URL_Shortener
