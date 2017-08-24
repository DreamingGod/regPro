/**
 * Created by yanqing on 2017/8/21.
 */
var request = require('request');
var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/getInfo', function (req, res) {
  console.log(req.body.input)
  var phone = req.body.input;
  var returnMe;
  // request('http://passport.chinahr.com/ajax/m/existLoginName?input='+phone, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(body) // Show the HTML for the baidu homepage.
  //     returnMe = body.returnMessage;
  //     res.end(returnMe);
  //   }
  // })
});



const urlList = [
  {
    "url": 'http://passport.chinahr.com/ajax/m/existLoginName?input=',
    "infoCheckField":"returnMessage",
    "validMessage": "用户存在",
    "websiteInfo": {
      "atavar":"",
      "title":"",
      "cate":"",
      "descri":"",
      "weburl":""
    }
  },
  {
    "url": 'https://passport.tuniu.com/register/isPhoneAvailable?tel=',
    "infoCheckField":"errno",
    "validMessage": -1,
    "websiteInfo": {
      "atavar":"",
      "title":"",
      "cate":"",
      "descri":"",
      "weburl":""
    }
  },
  {
    "url":'https://www.dajie.com/account/phonestatuscheck?phoneNumber=',
    "infoCheckField":"msg",
    "validMessage": "AUTHED",
    "websiteInfo": {
      "atavar":"",
      "title":"",
      "cate":"",
      "descri":"",
      "weburl":""
    }
  },

];

const requestUrl = function (url , phone){
  return new Promise(function (resolve, reject) {
    request(url["url"] + phone, function (error, response, body) {
      // console.log(JSON.parse(body)[url.infoCheckField])
      if (!error && JSON.parse(body)[url.infoCheckField] === url["validMessage"]) {
        console.log("success") // Show the HTML for the baidu homepage.
        returnMe = body;
        // response.end(returnMe);
        resolve(returnMe)
      }
    })
  })
}

const getFirRen = function (urlList, phone) {
  Promise.all(urlList.map(n => requestUrl(n,phone)))
    .then(function (result) {
      console.log(result)
    })
}

// getFirRen(urlList,15800984101)

// export default {
//   urlList:urlList,
//   requestUrl: requestUrl,
//   getFirRen:getFirRen
// }
