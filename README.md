# 短網址產生器
此專案使用node.js、express框架及mongodb所架構的網站，只要使用者在首頁input輸入想轉換的網址按下Shortener鈕後，本網站就會生成短網址供使用者使用。

## 專案畫面
![img](/public/img/index_page.jpg)
![img](/public/img/result_page.jpg)

## 產品功能
1. 使用者可輸入想產生短網址的網址
2. 使用者輸入後，可獲得一組短網址
3. 使用者在輸入網址列輸入短網址，即可前往之前輸入的網址目的地

## 環境建置
* Node.js： ^14.16.0
* Express： ^4.17.1
* Express-handlebars： ^5.3.4
* mongoose： ^6.0.12
* mongodb

## 專案安裝流程
1. 打開終端機，複製專案至本機
```
git clone 
https://github.com/deansyue/generator_url_shortener.git
```

2.進入存放此專案的資料夾
```
cd generator_url_shortener
```

3.安裝npm套件
```
npm install
```

4.使用腳本，啟動本專案伺服器
```
npm run dev
```

5.當終端機顯示以下文件，表示伺服器已正常啟動
```
Express is running on http://localhost:3000
```
# Contributor 專案開發人員
[deansyue](https://github.com/deansyue)