//點擊copy按鈕，複製短網址至剪貼簿
const copyButton = document.querySelector('#btn-copy')

copyButton.addEventListener('click', function copyURL(event) {
  const shortURL = copyButton.dataset.url
  navigator.clipboard.writeText(shortURL)
    .then(() => alert('copied'))
    .catch(error => console.log(error))
})