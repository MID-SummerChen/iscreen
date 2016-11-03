<template>
  <form id="join-form" class="white-popup-block mfp-hide">
    <h1>註冊會員</h1>
    <fieldset style="border:0;">

      <div class="form-group">
        <input type="text" name="display_name" id="display_name" class="form-control input-lg" placeholder="真實姓名" tabindex="1">
      </div>
      <div class="form-group">
        <input type="text" name="display_name" id="display_name" class="form-control input-lg" placeholder="身份証字號" tabindex="2">
      </div>
      <div class="form-group">
        <input type="text" name="display_name" id="display_name" class="form-control input-lg" placeholder="手機號碼" tabindex="3">
      </div>
      <div class="form-group">
        <input type="text" name="display_name" id="display_name" class="form-control input-lg" placeholder="E-mail" tabindex="4">
      </div>
      <div class="form-group">
        <input type="text" name="display_name" id="display_name" class="form-control input-lg" placeholder="密  碼" tabindex="5">
      </div>
      <div class="form-group">
        <input type="text" name="display_name" id="display_name" class="form-control input-lg" placeholder="地  址" tabindex="6">
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-md-6"><a href="#" class="btn btn-is btn-block btn-lg">確定註冊</a></div>
          <div class="col-xs-12 col-md-6"><a href="#" class="btn btn-is btn-block btn-lg">取   消</a></div>
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
