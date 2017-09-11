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
</style>
