<template>
  <div class="modal" id="signin_modal" tabindex="-1" role="dialog" aria-labelledby="signin_modal_label" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 class="modal-title" id="signin_modal_label">登录</h4>
        </div>
        <div class="modal-body">
          <form id="m_signin_form" role="form" action="/account/signin" method="post">
            <div class="form-group">
              <label for="m_signin_email" class="sr-only">邮箱/手机号</label>
              <input type="text" class="form-control" id="m_signin_email" name="account" required="" placeholder="邮箱/手机号" maxlength="32">
              <span class="text-danger small" style="display:none"></span>
            </div>
            <div class="form-group">
              <label for="m_signin_password" class="sr-only">密码</label>
              <input type="password" class="form-control" id="m_signin_password" name="password" required="" placeholder="密码">
              <span class="text-danger small" style="display:none"></span>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" name="remember" checked=""> 下次自动登录			    </label>
            </div>
            <button type="submit" class="btn btn-lg btn-success btn-block" data-loading-text="正在登录...">登录</button>
            <input type="hidden" name="__csrf__" value="6666cd76f96956469e7be39d750cc7d9_9a3a8d46bc42932643cb13acb2c2c3f6">
          </form>
          <div style="margin:10px 0">
            <a href="/account/forgot">忘记了密码?</a>
            <a class="pull-right" href="/account/signup" target="_blank">没有账号? 马上注册</a>
          </div>
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

