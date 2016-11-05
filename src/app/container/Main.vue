<template>
  <div>
    <div id="myModal" class="white-popup-block mfp-hide">
      <login-form v-show="currentForm === 'login'" :form-data="loginForm"></login-form>
      <forget-form v-show="currentForm === 'forget'" :form-data="forgetForm"></forget-form>
      <join-form v-show="currentForm === 'join'" :form-data="joinForm"></join-form>
    </div>

    <header-component :on-login="onLogin"></header-component>

    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <footer-component></footer-component>
  </div>
</template>
<script>
  import Header from '../component/page/home/Header.vue'
  import Footer from '../component/page/home/Footer.vue'
  import LoginForm from '../component/page/home/LoginForm.vue'
  import ForgetForm from '../component/page/home/ForgetForm.vue'
  import JoinForm from '../component/page/home/JoinForm.vue'
  import MyForm from '../component/widgets/MyForm.vue'

  import apiUtil from '../utils/apiUtil'

  export default{
    mixins: [apiUtil],
    data(){
      return{
        loginForm: null,
        forgetForm: null,
        joinForm: null,
        currentForm: "login"
      }
    },
    mounted() {
      this.formInit()
    },
    methods: {
      onLogin() {
        console.log("onLogin")
        this.currentForm = "login"
      },
      formInit() {
        this.loginForm = {
          id: "login-form",
          name: "login-form",
          title: "登入會員",
          display: {
            [`account`]: true,
            [`password`]: true,
          },
          value: {
            [`account`]: "admin@gmail.com",
            [`password`]: "admin2016",
          },
          placeholder: {
            [`account`]: "請輸入帳號",
            [`password`]: "請輸入密碼",
          },
          errMsg: {},
          onSubmit: this.onLoginSubmit.bind(this),
          onForget: this.onForget,
          onJoin: this.onJoin
        }

        this.forgetForm = {
          id: "forget-form",
          name: "forget-form",
          title: "忘記密碼",
          display: {
            [`email`]: true,
            [`phone`]: true,
          },
          value: {
            [`phone`]: "",
            [`password`]: "",
          },
          placeholder: {
            [`email`]: "請輸入E-mail",
            [`phone`]: "請輸入手機",
          },
          errMsg: {},
          onSubmit: this.onForgetSubmit
        }

        this.joinForm = {
          id: "join-form",
          name: "join-form",
          title: "註冊會員",
          display: {
            [`full_name`]: true,
            [`p_id`]: true,
            [`phone`]: true,
            [`email`]: true,
            [`password`]: true,
            [`address`]: true,
          },
          value: {
            [`full_name`]: "",
            [`p_id`]: "",
            [`phone`]: "",
            [`email`]: "",
            [`password`]: "",
            [`address`]: "",
          },
          placeholder: {
            [`full_name`]: "真實姓名",
            [`p_id`]: "身份証字號",
            [`phone`]: "手機號碼",
            [`email`]: "E-MAIL",
            [`password`]: "密  碼",
            [`address`]: "地  址",
          },
          errMsg: {},
          onSubmit: this.onJoinSubmit
        }


      },
      getFormData() {

      },
      async onLoginSubmit(_data) {
        var data = {
          id: _data.account,
          pw: _data.password
        }
        var res = await this.api("post","ac/cms/signin",data)
        if(res.resultCode===10) {
          $.magnificPopup.close()
          this.formInit()
        }

      },
      async onForgetSubmit() {
        var data = {
          id: _data.account,
          pw: _data.password
        }
        var res = await this.api("post","ac/cms/signin",data)
        if(res.resultCode===10) {
          $.magnificPopup.close()
          this.formInit()
        }

      },
      async onJoinSubmit() {
        var data = {
          id: _data.account,
          pw: _data.password
        }
        var res = await this.api("post","ac/cms/signin",data)
        if(res.resultCode===10) {
          $.magnificPopup.close()
          this.formInit()
        }
      },
      onForget() {
        this.currentForm = "forget"
      },
      onJoin() {
        this.currentForm = "join"
      }
    },
    components:{
      headerComponent: Header,
      footerComponent: Footer,
      MyForm,
      LoginForm,
      ForgetForm,
      JoinForm,
    }
  }
</script>

<style lang="stylus">

</style>
