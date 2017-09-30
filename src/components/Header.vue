<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-blue-light">
        <span class="logo" @click="backIndex">爱找回</span>
        <ul>
          <li><el-button href="/account/signin" id="nav_btn_signin"  type="text" @click="dialogFormVisible = true">登录</el-button></li>
          <li><a href="/account/signup" id="nav_btn_signup"><strong>注册</strong></a></li>
          <el-dialog title="登陆表单" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
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
        formLabelWidth: '120px'
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
