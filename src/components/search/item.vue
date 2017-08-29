<template>
  <!--"websiteInfo": {-->
  <!--"atavar":"https://static2.reg007.com/app/tuniu.jpg",-->
  <!--"title":"途牛旅游网",-->
  <!--"cate":"旅行",-->
  <!--"descri":"途牛旅游网-中国专业全面的旅游网,客户满意度94%;提供自助游(自由行),国内旅游,出境旅游,自驾游,公司旅游。低价保证,专业服务,九大出游保障,服务超百万人出游。",-->
  <!--"weburl":"http://www.tuniu.com/"-->
  <!--}-->
  <li class="media gad r7-sr-only" data-category="" >
    <a class="pull-left" target="_blank" :href=item.weburl><img class="media-object" :src=item.atavar></a>
    <div class="media-body">
      <h4 class="media-heading"><a target="_blank" :href=item.weburl>{{item.title}}</a><small> | <a href="#">{{item.cate}}</a></small></h4>
      <p>{{item.descri}}</p>
    </div>
  </li>
</template>
<script>
  export default {
    props: {
      disabled: Boolean,
      title: String,
      order: String,
      option: String,
      btnActive: Boolean,
      resultList: [],
      item: {}
    },
    methods: {
    }
  }
</script>
<style lang="less">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    ul li{
      float: left;
    }
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
