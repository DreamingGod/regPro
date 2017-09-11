<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-blue-light">
        <span class="logo">爱找回</span>
        <ul>
          <li><a href="/account/signin" id="nav_btn_signin">登录</a></li>
          <li><a href="/account/signup" id="nav_btn_signup"><strong>注册</strong></a></li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    props: {
      disabled: Boolean,
      title: String,
      order: String,
      option: String,
      btnActive: Boolean
    },
    methods: {
    }
  }
</script>
<style lang="less">
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
      }
      .logo{
        font-size: 3rem;
        color: white;
        margin-left: .5rem;
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
      position: relative;
      left: 50%;
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
