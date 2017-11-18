<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-blue-light">
        <span class="logo" @click="backIndex">爱找回</span>
        <ul>
          <li><el-button  id="nav_btn_signin"  type="text" @click="setRegVal(1)">登录</el-button></li>
          <li><el-button  id="nav_btn_signup"  type="text" @click="setRegVal(2)">注册</el-button></li>
          <el-dialog :title="formTitle" :visible.sync="dialogFormVisible" :before-close="handleClose">
            <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
              <el-form-item prop="phone">
                <el-input placeholder="手机/邮箱" type="phone" v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <el-form-item prop="pwd">
                <el-input placeholder="密码" type="password" v-model="ruleForm.pwd" ></el-input>
              </el-form-item>
              <el-form-item v-if="isRegForm" prop="scode">
                <el-input placeholder="邀请码" v-model="ruleForm.scode"></el-input>
              </el-form-item>
              <el-button type="primary" size="large" class="gotologin" @click="golor">{{btnText}}</el-button>
              <div class="detail-l">
			          	<a href="/account/forgot">忘记了密码?</a>
                  <!--<a class="pull-right" href="/account/signup" target="_blank">没有账号? 马上注册</a>-->
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
        if (!value) {
          return callback(new Error('输入不得为空'))
        }
        setTimeout(() => {
          if (this.regRules.regP.test(value) || this.regRules.regM.test(value)) {
            callback()
            me.isCorr = true
          } else {
            callback(new Error('输入格式非法'))
          }
        }, 10)
      }
      var checkPwd = (rule, value, callback) => {
        // 需要抛出callback() 不然一直loading
        if (!value) {
          return callback(new Error('输入不得为空'))
        } else {
          callback()
        }
      }
      var checkScode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邀请码不得为空'))
        } else {
          callback()
        }
      }
      return {
        dialogFormVisible: false,
        isRegForm: false,
        formTitle: '登录',
        btnText: '登录',
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
        rules: {   /* 表单验证规则 */
          phone: [
            { validator: checkAge, trigger: 'blur' }
          ],
          pwd: [
            { validator: checkPwd, trigger: 'blur' }
          ],
          scode: [
            { validator: checkScode, trigger: 'blur' }
          ]
        },
        ruleForm: {
          pwd: '123456',
          phone: '15800984101',
          scode: ''
        },
        regRules: {
          regP: /^1[34578]\d{9}$/,
          regM: /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/
        },
        setUser: {
          phone: '',
          pwd: ''
        }
      }
    },
    methods: {
      handleClose (done) {
        done()
        this.ruleForm = {}
      },
      backIndex () {
        this.$router.push({name: 'Content'})
      },
      setRegVal (itT) {
        if (itT === 1) {
          this.formTitle = this.btnText = '登录'
          this.isRegForm = !1  // 邀请码不可见
        } else {
          this.formTitle = this.btnText = '注册'
          this.isRegForm = true  // 邀请码可见
        }
        this.dialogFormVisible = true
      },
      golor () {
        this.submitForm()
      },
      submitForm () {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            this.validL()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      validL () {
        if (this.btnText === '注册') {
            // @1点击注册按钮会先校验规则, @2若规则正确则会校验手机或邮箱已经注册过了，@3最后校验邀请码是否正确
            // TODO 目前完成@1
            // validatePhone () @2
          if (this.checkCodeExist(this.ruleForm.scode)) {
              // 邀请码通过 注册用户信息
            this.setUser.phone = this.ruleForm.phone
            this.setUser.pwd = this.ruleForm.pwd
            this.signup(this.setUser)
          }
        }
      },
      signup (user) {
        // 待写入数据库的用户信息
        this.$http.post('/api/signup', {user: user}).then(function (res) {
          console.log(user)
          if (res.body === 'ok') {
            // 注册成功关闭弹窗 不显示用户信息
            this.$message.success('恭喜你, 注册成功，可以登录探索新的世界了')
          } else if (res.body === 'duplicate key') {
            // 有效既去新的用户页面或显示用户个人信息 若失败提示用户名已经注册过了
            this.$message.error('用户名已被注册了！')
          }
        })
      },
      checkCodeExist (scode) {
        // 校验邀请码是否正确
        // this.$http.post('/api/checkCode', {input: scode}).then(function (res) {
        //   console.log(res.body)
        //   if (!res.body) {
        //     // 邀请码无效提示 todo 需要一个接口
        //     this.$message.error('邀请码无效噢！'); return false
        //   } else {
        //     return true
        //   }
        //   // this.$router.push({name: 'search', params: res.body})
        //   // searchStore.totalList = res.body;
        // })
        return true
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
    top: 30%;
    border-radius: 10px;
    .detail-l{
      a{color:#337ab7 !important;}
    }
  }
  .gotologin{
    width: 100% !important;
  }
  @media screen and (max-width: 1024px) {
    .el-dialog--small{
      width: 78%;
      top: 23% !important;
      border-radius: 10px;
      .el-input{
        width: 100% !important;
      }
      .detail-l{
        a{color:#337ab7 !important;}
      }
    }
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
