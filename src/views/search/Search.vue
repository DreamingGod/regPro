<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="全部" name="first" class="is-active">
        <item-com  v-for="item in resultList" :item=item></item-com>
      </el-tab-pane>
      <el-tab-pane label="名站" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="购物" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="金融" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="社交" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="社区" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="生活" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="旅行" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="游戏" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="工具" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="教育" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="行业" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="娱乐" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="其他" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import {searchGetters} from '../../vuex/getters'
  import itemCom from '../../components/search/item.vue'
  export default {
    vuex: {
      getters: {
        resultList: searchGetters.resultList
      },
      actions: {
      }
    },
    data () {
      return {
        resultList: [],
        activeName: 'first'
      }
    },
    computed: {
      filterList: function () {
        const cateList = [
          '名站', '购物', '金融', '社交', '社区', '生活', '旅行', '游戏', '工具', '教育', '行业', '娱乐', '其他'
        ];
        return this.resultList.filter((item) => {
          console.log(item)
          return item[""]
        })
      }
    },
    components: {
      itemCom
    },
    methods: {
      handleClick (tab, event) {
      }
    },
    mounted: function () {
      console.log('v', this.$route.params)
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
