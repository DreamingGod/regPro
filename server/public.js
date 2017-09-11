/**
 * Created by yanqing on 2017/8/25.
 */
var request = require("request");

const requestUrl = function (url , phone){
  return new Promise(function (resolve, reject) {
    request(url["url"] + phone, function (error, response, body) {
      if (!error && JSON.parse(body)[url.infoCheckField] === url["validMessage"]) {
        var rM = url["websiteInfo"]
        resolve(rM)
      }else{
        resolve({})
      }
    })
  })
}

const getFirRen = function (urlList, phone) {
  return Promise.all(urlList.map(n => requestUrl(n,phone)))
}

module.exports = {
  requestUrl: requestUrl,
  getFirRen: getFirRen
}
