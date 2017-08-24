<template>
  <div class="modal" id="signup_modal" tabindex="-1" role="dialog" aria-labelledby="signup_modal_label" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 class="modal-title" id="signup_modal_label">注册</h4>
        </div>
        <div class="modal-body">
          <form id="m_signup_form" role="form" action="/account/signup" method="post">
            <div class="form-group">
              <label for="m_signup_email" class="sr-only">邮箱/手机号</label>
              <input type="text" class="form-control" id="m_signup_email" name="account" required="" placeholder="邮箱/手机号，需验证" maxlength="32">
              <span class="text-danger small" style="display:none"></span>
            </div>
            <div class="form-group">
              <label for="m_signup_password" class="sr-only">密码</label>
              <input type="password" class="form-control" id="m_signup_password" name="password" required="" placeholder="密码">
              <span class="text-danger small" id="m_signup_password_tips" style="display:none">字母、数字或下划线，最短6个字符，区分大小写</span>
            </div>
            <div class="form-group">
              <label for="m_invite_code" class="sr-only">邀请码</label>
              <input type="text" class="form-control" id="m_invite_code" name="invite_code" required="" placeholder="邀请码" maxlength="6">
              <span class="text-danger small" style="display:none"></span>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" id="m_check_agree" checked=""> 我同意 <a href="/terms" target="_blank">Reg007 的使用协议</a>
              </label>
            </div>
            <button type="submit" id="m_btn_signup" class="btn btn-lg btn-success btn-block" data-loading-text="正在注册...">注册</button>
            <input type="hidden" name="__csrf__" value="6666cd76f96956469e7be39d750cc7d9_9a3a8d46bc42932643cb13acb2c2c3f6">
          </form>
          <p class="text-center" style="margin:10px 0">已有账号? <a href="/account/signin">去登录</a></p>
        </div>
      </div>
    </div>
  </div>	    <div class="modal suggest-modal" id="feedback_modal" tabindex="-1" role="dialog" aria-labelledby="feedback_modal_label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title" id="feedback_modal_label">意见反馈</h4>
      </div>
      <div class="modal-body">
        <textarea name="feedback" placeholder="写点什么吧..."></textarea>
      </div>
      <div class="modal-footer">
        <div class="pull-left">Thanks for sharing!<span class="hidden-xs"> (we'll be adding new stuff soon)</span></div>
        <button type="button" data-btn="feedback" class="btn btn-success" data-loading-text="正在发送..."><span class="glyphicon glyphicon-send"></span>&nbsp;&nbsp;发送&nbsp;&nbsp;</button>
      </div>
    </div>
  </div>
</div>
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
      onTap () {
        this.btnActive = !this.btnActive
        if (!this.btnActive) {
          this.$dispatch('reduceActiveList', this.option)
        } else {
          this.$dispatch('addActiveList', this.option)
        }
      }
    }
  }
</script>
<style lang="less">

</style>


