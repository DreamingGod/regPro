/**
 * Created by yanqing on 2017/9/18.
 */

var request = require("request");

// const requestUrl = function (url , phone){
//   return new Promise(function (resolve, reject) {
//     request(url["url"] + phone, function (error, response, body) {
//       console.log(body)
//       // if (!error && JSON.parse(body)[url.infoCheckField] === url["validMessage"]) {
//       //   var rM = url["websiteInfo"]
//       //   resolve(rM)
//       // }else{
//       //   resolve({})
//       // }
//     })
//   })
// }

request('http://passport.ziroom.com/api/index.php?r=user/verify-account&phone=15800984101', function  (error, response, body) {
  console.log("body", body)
})
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
