/**
 * Created by yanqing on 2017/8/24.
 */

const urlList = [
  {
    "url": 'http://passport.chinahr.com/ajax/m/existLoginName?input=',
    "infoCheckField":"returnMessage",
    "validMessage": "用户存在",
    "websiteInfo": {
      "atavar":"https://static2.reg007.com/app/chinahr.jpg",
      "title":"中华英才网",
      "cate":"工具",
      "descri":"【中华英才网】在全国多个城市为个人求职提供最准确的企业职位最新招聘信息大全，人才市场招聘会找工作信息，为企业提供人才招聘、猎头、培训、测评和人事外包在内的全方位的人力资源服务，帮助个人求职者与企业搭建最佳的人才招募和人才培养渠道！",
      "weburl":"http://www.chinahr.com"
    }
  },
  {
    "url": 'https://passport.tuniu.com/register/isPhoneAvailable?tel=',
    "infoCheckField":"errno",
    "validMessage": -1,
    "websiteInfo": {
      "atavar":"https://static2.reg007.com/app/tuniu.jpg",
      "title":"途牛旅游网",
      "cate":"旅行",
      "descri":"途牛旅游网-中国专业全面的旅游网,客户满意度94%;提供自助游(自由行),国内旅游,出境旅游,自驾游,公司旅游。低价保证,专业服务,九大出游保障,服务超百万人出游。",
      "weburl":"http://www.tuniu.com/"
    }
  },
  {
    "url":'https://www.dajie.com/account/phonestatuscheck?phoneNumber=',
    "infoCheckField":"msg",
    "validMessage": "AUTHED",
    "websiteInfo": {
      "atavar":"https://static2.reg007.com/app/tuniu.jpg",
      "title":"大街网",
      "cate":"生活",
      "descri":"中国职业社交网站缔造者。打造职业形象，收获职业机会，拓展行业人脉，提高个人技能。",
      "weburl":"https://www.dajie.com/"
    }
  },
];

module.exports = urlList;


