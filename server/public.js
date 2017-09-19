/**
 * Created by yanqing on 2017/8/25.
 */
var request = require("request");

const requestUrl = function (url , phone){
  return new Promise(function (resolve, reject) {
    request(url["url"] + phone, function (error, response, body) {
      var rM = url["websiteInfo"]
      console.log(rM)
      if(body.indexOf("ok") >= 0){
        // TODO use for return are String , should make a arr later.
        console.log("zz")
        resolve(rM)
      }
      else if(!error && JSON.parse(body)[url.infoCheckField] === url["validMessage"]) {
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
