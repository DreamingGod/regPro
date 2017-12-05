<template>
  <div id="footer" class="hidden-xs">
    <div class="container">
    <ul class="list-inline footer-links">
      <li class="text-muted credit" style="margin-right: 1rem;">©&nbsp;2017 AiZhaoHui All rights reserved.</li>
      <el-tooltip class="item"  placement="top-start">
        <div slot="content" class="show_detail_box">爱找回致力于用户找回手机绑定或注册网站，<br/>为用户省却不必要的麻烦。</div>
        <span>·关于</span>
      </el-tooltip>
      <el-tooltip class="item"  placement="top-start">
        <div slot="content" class="show_detail_box">邮箱: ritsu.yan@foxmail.com </div>
        <span>·联系</span>
      </el-tooltip>
      <el-tooltip class="item"  placement="top-start">
        <div slot="content" class="show_detail_box">
          "爱找回"深知隐私的重要性  <br/>
          我们尊重、保护用户的个人隐私  <br/>
          并郑重承诺，除非有法律或程序要求  <br/>
          否则未经用户授权我们不会公布与用户个人有关的资料。 <br/>
          我们将定期检查隐私保护措施，切实保证用户个人资料隐私保护。 <br/>
          如果您对我们的服务有任何建议，请通过邮件与我们取得联系。</div>
        <span>·隐私</span>
      </el-tooltip>
      <li class="item"  placement="top-start" @click="openFB" id="feB">
        <span>·反馈</span>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
  export default {
    props: {
    },
    methods: {
      openFB () {
        this.$prompt('请输入反馈内容', '写点什么吧', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
          inputErrorMessage: ''
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的内容已反馈，感谢您的意见'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      }
    }
  }
</script>
<style lang="less">
  #footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
    .container{
      margin-top: 2rem;
      .item{
        margin-right: 1.5rem;
        color: #20a0ff;
      }
    }
  }
  .footer-links{
    cursor: pointer !important;
  }
  .show_detail_box{
    line-height: 2rem;
    font-size: 1.5rem;
  }
  #feB{
    cursor: pointer;
  }
</style>

