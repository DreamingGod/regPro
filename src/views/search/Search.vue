<template>
  <div class="container">
    <el-tabs v-model="activeName"  type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first" class="is-active">
        <item-com  v-for="item in resultList" :item=item></item-com>
      </el-tab-pane>
      <el-tab-pane v-for="(item, index) in cateList" :label="item">
        <item-com  v-for="item in cateRenList" :item=item></item-com>
      </el-tab-pane>
    </el-tabs>
    <div v-if="unlogin" id="maskItem">
      <div class="content">
        <div>
          <a class="auth_dialog">登录 </a>或<a class="auth_dialog"> 注册</a>，让我们更懂你，就能更多帮到你
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import itemCom from '../../components/search/item.vue'
  export default {
    vuex: {
      getters: {
      },
      actions: {
      }
    },
    data () {
      return {
        unlogin: true,
        resultList: [],
        activeName: 'first',
        cateList: [
          '名站', '购物', '金融', '社交', '社区', '生活', '旅行', '游戏', '工具', '教育', '行业', '娱乐', '其他'
        ],
        cateRenList: []
      }
    },
    computed: {
    },
    components: {
      itemCom
    },
    methods: {
      handleClick: function (tab, event) {
        this.cateRenList = this.resultList.filter((item) => {
          if (item['cate']) {
            return item['cate'].indexOf(event.target.innerText) >= 0
          }
        })
      }
    },
    mounted: function () {
//      console.log('v', this.$route.params)
      this.resultList = this.$route.params
      // TODO should judge at the unlogin status.
    },
    /**
     * 路由函数
     */
    route: {
      /**
       */
      data ({to, from}) {
        console.log(from)
      }
    }
  }
</script>
<style lang="less">
  li{
    list-style-type: none;
    .media-body{
      padding-top: 0.5rem;
    }
  }
  #maskItem{
    background: url("../../../lib/img/maskBg.png");
    width: 1166px;
    height: 434px;
    margin-left: -23px;
  }
  .content{
    background: rgba(56,180,71,0.7);
    filter: alpha(opacity=70);
    width: 460px;
    height: 110px;
    margin: 0 auto;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 110px;
    a{
      font-size: 22px;
    }
  }
</style>
