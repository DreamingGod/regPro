<template>
  <div class="container">
      <div class="search-box">
        <h1 id="t_i_h1" style="font-size:32px;">你注册过哪些网站？<span class="sr-only">输入邮箱或手机号，一搜便知。</span></h1>
        <div class="search-input">
        <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-form-item label="" prop="age">
          <el-input v-model="ruleForm.age" placeholder="邮箱/手机号" autofocus style="display: inline-block"></el-input>
          <el-button type="primary" icon="search" @click="search(ruleForm.age)" >搜索</el-button>
        </el-form-item>
        </el-form>
        </div>
      </div>
  </div>
</template>
<script>
  import searchStore from '../vuex/search/store'
  import ElForm from '../../node_modules/element-ui/packages/form/src/form'
export default {
    data () {
      var checkAge = (rule, value, callback) => {
        const me = this
        if(!value){
          return callback(new Error('输入不得为空'))
        }
        setTimeout(() => {
          const regP = /^1[34578][0-9]{9}/,
            regM = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
          if(regP.test(value) || regM.test(value)){
            callback()
            me.isCorr = true
          }else{
            callback(new Error('输入格式非法'))
          }
        }, 10)
      }
      return {
        isCorr: false,
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules:{
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
    },
    components: {
      ElForm
    },
    ready () {
    },
    methods: {
      search (message) {
        console.log(this.isCorr)
        if(!this.isCorr) return
        this.$http.post('/api/getInfo',{input:message}).then(function(res){
          console.log(res.body)
          this.$router.push({name: 'search', params: res.body})
          searchStore.totalList = res.body;
        })
      }
    }
  }
</script>
<style lang="less">
  .search-box{
    margin-left: 21rem;
    margin-top: 14rem;
    .search-input{
      margin-top: 2rem;
      .el-input{
        width: 47%;
      }
    }
  }


  @media screen and (max-width: 1024px) {
    .search-box{
      margin-top: 8rem;
      margin-left: 0;
    }
    .el-input{
      width: 70% !important;
    }
  }

</style>
