/**
 * Created by yanqing on 2017/8/24.
 */
const urlList = require('./api/urlList')
const {requestUrl,getFirRen} = require('./public')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const User = require('../db/user')
const mongoose = require('mongoose');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect('mongodb://localhost:27017/runoob');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
  console.log("连接成功")
});

// 后端api路由

/*
**  搜索当前账号注册网站信息
*/
app.post('/api/getInfo', function (req, res) {
  let phone = req.body.input;
  let t = urlList;
  getFirRen(t,phone,res).then(function (result) {
    res.send(result)
  })
});


/*
**  检查当前验证码是否有效
*/
app.post('/api/checkCode', function (req, res) {
  console.log(req)
    // 用户信息写入数据库
    UserModel.create(user)
      .then(function (result) {
        // 此 user 是插入 mongodb 后的值，包含 _id
        console.log(result)
        res.send("check")
      })
      .catch(function (e) {
        if (e.message.match('duplicate key')) {
          console.log(e);
          res.send("check ")
          return res.redirect('/')
        }
        next(e)
      })
});

/*
**  注册用户信息
*/
app.post('/api/signup', function (req, res) {
    // 用户信息写入数据库 需要先查找没有找到的话就保存 TODO
   console.log('body', req.body)
   var user = new User(req.body.user)
   User.findOne({'phone': req.body.user.phone}, function (err, reo) {
     if (err) console.log(err)
     console.log("粉丝", reo); 
     if (!reo) {
      user.save(function (err, result) {
        if (err) return res.send("未保存成功")
        console.log('发多少', result)
        res.send("ok")
      })
     } else {
      res.send("duplicate key")
     }
   })
});

// 监听端口
app.listen(9090)
console.log('success listen at port:9090......')
