<template>
  <div id="footer" class="hidden-xs">
    <div class="container">
    <ul class="list-inline footer-links">
      <li class="text-muted credit">©&nbsp;2017 REG007</li>
      <li class="text-muted">·</li>
      <li><a href="/about">关于</a></li>
      <li class="text-muted">·</li>
      <li><a href="mailto:contact@reg007.com" target="_blank">联系</a></li>
      <li class="text-muted">·</li>
      <li><a href="/terms">协议</a></li>
      <li class="text-muted">·</li>
      <li><a href="/privacy">隐私</a></li>
      <li class="text-muted">·</li>
      <li><a href="#feedback" data-toggle="modal" data-target="#feedback_modal"><span class="glyphicon glyphicon-comment"></span>&nbsp;反馈</a></li>
      <li class="text-muted">·</li>
      <li class="dropup" style="position:relative;">
        <a href="#share" id="shareMenu" data-toggle="dropdown" aria-expanded="true"><span class="glyphicon glyphicon-share-alt"></span>&nbsp;分享</a>
        <ul class="dropdown-menu" role="menu" aria-labelledby="shareMenu">
          <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-toggle="modal" data-target="#share_weixin_modal_2"><i class="fa fa-weixin"></i>&nbsp;&nbsp;微信</a></li>
          <li role="presentation"><a role="menuitem" tabindex="-1" target="_blank" href="http://share.baidu.com/s?type=text&amp;searchPic=1&amp;sign=on&amp;to=tsina&amp;url=https://www.reg007.com&amp;title=%E4%BD%A0%E6%B3%A8%E5%86%8C%E8%BF%87%E5%93%AA%E4%BA%9B%E7%BD%91%E7%AB%99%EF%BC%9F%E8%BE%93%E5%85%A5%E9%82%AE%E7%AE%B1%E6%88%96%E6%89%8B%E6%9C%BA%E5%8F%B7%EF%BC%8C%E4%B8%80%E6%90%9C%E4%BE%BF%E7%9F%A5%E3%80%82&amp;pic=https://www.reg007.com/img/reg007-snapshot.jpg&amp;desc=Reg007%20%E5%B8%AE%E5%8A%A9%E6%82%A8%E9%87%8D%E6%96%B0%E8%AE%B0%E8%B5%B7%E5%9C%A8%E8%8C%AB%E8%8C%AB%E7%BD%91%E6%B5%B7%E4%B8%AD%E6%9B%BE%E7%BB%8F%E6%B3%A8%E5%86%8C%E8%BF%87%E7%9A%84%E7%AB%99%E7%82%B9%E3%80%82"><i class="fa fa-weibo"></i>&nbsp;&nbsp;微博</a></li>
          <li role="presentation"><a role="menuitem" tabindex="-1" target="_blank" href="https://connect.qq.com/widget/shareqq/index.html?url=https://www.reg007.com&amp;pics=https://www.reg007.com/img/reg007-snapshot.jpg&amp;title=%E4%BD%A0%E6%B3%A8%E5%86%8C%E8%BF%87%E5%93%AA%E4%BA%9B%E7%BD%91%E7%AB%99%EF%BC%9F%E8%BE%93%E5%85%A5%E9%82%AE%E7%AE%B1%E6%88%96%E6%89%8B%E6%9C%BA%E5%8F%B7%EF%BC%8C%E4%B8%80%E6%90%9C%E4%BE%BF%E7%9F%A5%E3%80%82&amp;summary=Reg007%20%E5%B8%AE%E5%8A%A9%E6%82%A8%E9%87%8D%E6%96%B0%E8%AE%B0%E8%B5%B7%E5%9C%A8%E8%8C%AB%E8%8C%AB%E7%BD%91%E6%B5%B7%E4%B8%AD%E6%9B%BE%E7%BB%8F%E6%B3%A8%E5%86%8C%E8%BF%87%E7%9A%84%E7%AB%99%E7%82%B9%E3%80%82&amp;desc=%E5%88%9A%E7%9C%8B%E5%88%B0%E8%BF%99%E4%B8%AA%E4%B8%9C%E8%A5%BF%E4%B8%8D%E9%94%99%EF%BC%8C%E6%8E%A8%E8%8D%90%E7%BB%99%E4%BD%A0%E7%9C%8B%E7%9C%8B%EF%BD%9E"><i class="fa fa-qq"></i>&nbsp;&nbsp;QQ</a></li>
        </ul>
      </li>  	    </ul>
  </div>
  </div>
</template>
<script>
  export default {
    props: {
      disabled: Boolean,
      title: String,
      order: String,
      option: String,
      btnActive: Boolean
    },
    methods: {
    }
  }
</script>
<style lang="less">

</style>

