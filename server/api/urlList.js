/**
 * Created by yanqing on 2017/8/24.
 */

const urlList = [
  {
    "url": 'http://passport.chinahr.com/ajax/m/existLoginName?input=',
    "infoCheckField":"returnMessage",
    "validMessage": "用户存在",
    "websiteInfo": {
      "atavar":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3523255667,1385706111&fm=58&s=9116087A0B8C9E010DC797B40300100C&bpow=121&bpoh=75",
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
      "atavar":"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_9765489_1444961475324.jpg",
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
      "atavar":"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3490300654,2272861658&fm=58&s=2010E532CDA44C01445CECD40000D0B3&bpow=121&bpoh=75",
      "title":"大街网",
      "cate":"生活",
      "descri":"中国职业社交网站缔造者。打造职业形象，收获职业机会，拓展行业人脉，提高个人技能。",
      "weburl":"https://www.dajie.com/"
    }
  },
  {
    "url":'https://www.feidee.com/money/user/aj.do?m=check&email=',
    "infoCheckField":"msg",
    "validMessage": "AUTHED",
    "websiteInfo": {
      "atavar":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1478523263,1502222784&fm=58&u_exp_0=911489648,1168917374&fm_exp_0=86&bpow=400&bpoh=400",
      "title":"随手记",
      "cate":"金融",
      "descri":"随手记是一个移动互联理财平台。它主要为您提供:个人理财产品",
      "weburl":"https://www.feidee.com/"
    }
  },
  {
    "url":'https://ac.ppdai.com/registercheck?name=mobilePhone&value=',
    "infoCheckField":"Code",
    "validMessage": 0,
    "websiteInfo": {
      "atavar":"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1275055424.jpg",
      "title":"拍拍贷",
      "cate":"金融",
      "descri":"拍拍贷-中国领先互联网金融网贷平台 提供网络贷款,投资理财 小额贷款,短期贷款,个人贷款,无抵押贷款服务",
      "weburl":"https://ac.ppdai.com/"
    }
  },
];

module.exports = urlList;


