<template>
  <div class="modal" id="share_weixin_modal_2" tabindex="-1" role="dialog" aria-labelledby="share_weixin_modal_2_label" aria-hidden="true">
    <div class="modal-dialog share-weixin-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 class="modal-title" id="share_weixin_modal_2_label">分享到微信</h4>
        </div>
        <div class="modal-body">
          <!--<p class="text-center"><img src="//static2.reg007.com/img/reg007-qrcode.png" alt="微信二维码" width="160" height="160" class="img-thumbnail"></p>-->
        </div>
        <div class="modal-footer">
          <div class="text-center">打开微信“扫一扫”，打开网页后点击右上角分享按钮</div>
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
