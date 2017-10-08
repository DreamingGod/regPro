<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-blue-light">
        <span class="logo" @click="backIndex">爱找回</span>
        <ul>
          <li><el-button href="/account/signin" id="nav_btn_signin"  type="text" @click="dialogFormVisible = true">登录</el-button></li>
          <li><a href="/account/signup" id="nav_btn_signup"><strong>注册</strong></a></li>
          <el-dialog title="登陆" :visible.sync="dialogFormVisible">
            <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
              <el-form-item>
                <el-input placeholder="手机/邮箱" v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
                <el-form-item>
                <el-input placeholder="密码" v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-button type="primary" size="large" class="gotologin">登陆</el-button>
              <div class="detail-l">
			          	<a href="/account/forgot">忘记了密码?</a>
                  <a class="pull-right" href="/account/signup" target="_blank">没有账号? 马上注册</a>
			        </div>
            </el-form>
          </el-dialog>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    props: {
    },
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
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
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
    methods: {
      backIndex () {
        this.$router.push({name: 'Content'})
      }
    }
  }
</script>
<style lang="less">
  .el-button--text {
    color: white !important;
  }
  .bg-blue-light {
    background-color: #20a0ff;
  }
  .el-dialog--small{
    width: 28%;
    border-radius: 10px;
    .detail-l{
      a{color:#337ab7 !important;}
    }
  }
  .gotologin{
    width: 100% !important;
  }
  @media screen and (max-width: 1024px) {
    .grid-content {
      display: flex;
      height: 4.5rem;
      line-height: 4.5rem;
      border-radius: 4px;
      min-height: 36px;
      ul li{
        float: left;
        margin-right: 1rem !important;
      }
      .logo{
        font-size: 3rem;
        color: white;
        margin-left: .5rem !important;
      }
    }
  }
  .grid-content {
    display: flex;
    height: 4.5rem;
    line-height: 4.5rem;
    border-radius: 4px;
    min-height: 36px;
    color: white;
    a{
      color: white;
    }
    ul{
      position: absolute;
      left: 70%;
    }
    ul li{
      float: left;
      margin-right: 3rem;
      color: white;
      list-style-type: none;
      font-size: 1.5rem;
    }
    .logo{
      font-size: 3rem;
      margin-left: 29rem;
    }
  }
</style>
