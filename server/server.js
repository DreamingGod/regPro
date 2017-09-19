/**
 * Created by yanqing on 2017/8/24.
 */
const urlList = require('./api/urlList')
const {requestUrl,getFirRen} = require('./public')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 后端api路由
app.post('/getInfo', function (req, res) {
  let phone = req.body.input;
  let t = urlList;
  getFirRen(t,phone,res).then(function (result) {
    res.send(result)
  })
});

// 监听端口
app.listen(9090)
console.log('success listen at port:9090......')
