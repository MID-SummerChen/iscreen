<template>
  <form :id="formData.name" class="white-popup-block mfp-hide">
    <h1>{{formData.title}}</h1>
    <fieldset style="border:0;">
      <div class="form-group">
        <input type="text" name="display_name" id="display_name" class="form-control input-lg" placeholder="請輸入手機" tabindex="1">
      </div>
      <div class="form-group">
        <input type="password" name="display_name" id="display_name" class="form-control input-lg" placeholder="請輸入密碼" tabindex="2">
      </div>
      <div class="span5"></div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-md-12"><a href="#" class="btn btn-login btn-block btn-lg">登 入</a></div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-md-6"><a href="#forget-form" class="btn btn-is btn-block popup-with-form">忘記密碼</a></div>
          <div class="col-xs-12 col-md-6"><a href="#join-form" class="btn btn-is btn-block popup-with-form">還沒有帳號?</a></div>
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
    props: ['formData']
  }
</script>

<style lang="stylus">

</style>
