<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3">
        <h1 id="t_i_h1" style="font-size:32px;">你注册过哪些网站？<span class="sr-only">输入邮箱或手机号，一搜便知。</span></h1>
          <div class="input-group">
            <label class="sr-only" for="e_m">邮箱/手机号</label>
            <input v-model="message"  style="height:40px;font-size:16px" id="e_m" maxlength="32" placeholder="邮箱/手机号" autocomplete="off" >
            {{message}}
            <button class="" v-on:click="search(message)"  style="padding:9px 22px;"></button>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import searchStore from '../vuex/search/store'
  console.log(searchStore)
export default {
  vuex: {
    store:{
      searchStore:searchStore
    },
    getters: {
      },
    actions: {
    }
  },
  data () {
      return {
        message: '',
        naireId: 0,
        activeList: [],
        activeOpt: false,
        btnActive: false,
        scrollerHeight: '0px'
      }
    },
  computed: {
      isAccordSubmit () {
        return this.activeList.indexOf('A') >= 0 && this.activeList.indexOf('B') >= 0 && this.activeList.indexOf('C') >= 0
      }
    },
  components: {
    },
  ready () {
    },
    methods: {
      search (message) {
        const me = this;
        this.$http.post('/getInfo',{input:message}).then(function(res){
          console.log(res.body)
//          me.$router.push('/search')
          this.$router.push({name: 'search', params: res.body})
          searchStore.totalList = res.body;
        });
      }
    }
  }
</script>
<style lang="less">

</style>
