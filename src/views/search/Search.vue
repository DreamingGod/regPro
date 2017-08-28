<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="全部" name="first">用户管理</el-tab-pane>
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
  import searchStore from '../../vuex/search/store'
  import {searchGetters} from '../../vuex/getters'
  console.log('z', searchStore)
  export default {
    vuex: {
      store: {
        searchStore: searchStore
      },
      getters: {
        resultList: searchGetters.resultList
      },
      actions: {
      }
    },
    data () {
      return {
        activeName: 'second'
      }
    },
    methods: {
      handleClick (tab, event) {
      }
    },
    /**
     * 路由函数
     */
    route: {
      /**
       */
      data ({to, from}) {
        console.log(from)
        console.log(searchStore)
      }
    }
  }
</script>
<style lang="less">

</style>
