/**
 * Created by yanqing on 2017/8/24.
 */
// const userApi = require('./api/urlList')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 后端api路由
app.post('/getInfo', function (req, res) {
  console.log(req.body.input)
  var phone = req.body.input;
  var returnMe;
  res.end("233")
});

// 监听端口
app.listen(9090)
console.log('success listen at port:9090......')
