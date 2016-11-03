<template>
  <form id="forget-form" class="white-popup-block mfp-hide">
    <h1>忘記密碼</h1>
    <fieldset style="border:0;">

      <div class="form-group">
        <input type="text" name="display_name" id="display_name" class="form-control input-lg" placeholder="請輸入E-mail" tabindex="1">
      </div>
      <div class="form-group">
        <input type="password" name="display_name" id="display_name" class="form-control input-lg" placeholder="請輸入手機" tabindex="2">
      </div>
      <div class="span5"></div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-md-12"><a href="#" class="btn btn-login btn-block btn-lg">確  定</a></div>
        </div>
      </div>

    </fieldset>
  </form>
</template>
<script>
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    components:{
    }
  }
</script>

<style lang="stylus">

</style>
