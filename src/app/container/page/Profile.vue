<template>
  <div class="pagecontainer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="cell_number clearfix">
            <div class="sapce120"></div>
            <div class="col-xs-6 col-sm-6 col-md-6">
              <p>已使用格數</p>
              <p class="font1">1200</p>
              <p>共 180 秒</p>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6">
              <p>購買格數</p>
              <p class="font2">3200</p>
              <p>共 360 秒</p>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="number_box">
            <div class="">
              <div class=" col-md-offset-2 col-md-8">
                <h1>會員資訊</h1>
                <div class="form-group row">
                  <label for="example-text-input" class="col-md-3 col-xs-12 col-form-label">真實姓名</label>
                  <div class="col-md-9 col-xs-12">
                    <input class="form-control" type="text" id="" value="王小明" tabindex="1" disabled>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-md-3 col-xs-12 col-form-label">身份証字號</label>
                  <div class="col-md-9 col-xs-12">
                    <input class="form-control" type="text" id="" value="N12345678" tabindex="2" disabled>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-md-3 col-xs-12 col-form-label">手機號碼</label>
                  <div class="col-md-9 col-xs-12">
                    <input class="form-control" type="text" id="" value="0912345678" tabindex="3" disabled>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-md-3 col-xs-12 col-form-label">E-mail</label>
                  <div class="col-md-9 col-xs-12">
                    <input class="form-control" type="text" id="" value="google@gmail.com" tabindex="4" disabled>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-md-3 col-xs-12 col-form-label">密  碼</label>
                  <div class="col-md-9 col-xs-12">
                    <input class="form-control" type="password" id="" value="123456" tabindex="5" disabled>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-md-3 col-xs-12 col-form-label">地  址</label>
                  <div class="col-md-9 col-xs-12">
                    <input class="form-control" type="text" id="" value="台中市" tabindex="6" disabled>
                  </div>
                </div>


                <div class="row">
                  <div class="col-xs-12 col-md-6"><a href="modify_member.html" class="btn btn-is btn-block btn-lg">修改會員資料</a></div>
                  <div class="col-xs-12 col-md-6"><a href="modify_password.html" class="btn btn-is btn-block btn-lg">修改密碼</a></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>

  import apiUtil from '../../utils/apiUtil'

  export default{
    mixins: [apiUtil],
    data(){
      return{
      }
    },
    mounted() {
    },
    methods: {

    }
  }
</script>

<style lang="stylus">

</style>
