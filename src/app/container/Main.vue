<template>
  <div>
    <div id="myModal" class="white-popup-block mfp-hide">
      <login-form v-show="currentForm === 'login'" :form-data="loginForm"></login-form>
      <forget-form v-show="currentForm === 'forget'" :form-data="forgetForm"></forget-form>
      <join-form v-show="currentForm === 'join'" :form-data="joinForm"></join-form>
      <confirm-form v-show="currentForm === 'confirm'" :form-data="confirmForm"></confirm-form>
    </div>

    <header-component :on-login="onLogin" :is-login="isLogin" :on-logout="onLogout" :media-cls-list="mediaClsList"></header-component>

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
  import ConfirmForm from '../component/page/home/ConfirmForm.vue'
  import MyForm from '../component/widgets/MyForm.vue'

  import apiUtil from '../utils/apiUtil'
  import comUtil from '../utils/comUtil'

  export default{
    mixins: [apiUtil,comUtil],
    data(){
      return{
        loginForm: null,
        forgetForm: null,
        confirmForm: null,
        joinForm: null,
        currentForm: "login",
        isLogin: false,
        mediaClsList: null
      }
    },
    beforeMount() {
      if(sessionStorage.getItem('isLogin')){
        this.isLogin = true
      }
    },
    mounted() {
      this.checkIfLogin()
      this.formInit()
      this.getMediaCls()
    },
    methods: {
      onLogin() {
        this.currentForm = "login"
      },
      async onLogout() {
        console.log("Logout")
        var res = await this.api("post","ac/app/signout")
        if(res.resultCode===10){
          swal("成功登出")
          sessionStorage.removeItem('isLogin')
          this.isLogin = false
          this.$router.push("/")
        }
      },
      async getMediaCls() {
        var res = await this.api("get","med")
        this.mediaClsList = res.response.items
      },
      formInit() {
        this.loginForm = {
          id: "login-form",
          name: "login-form",
          title: "登入會員",
          display: {
            [`phone`]: true,
            [`password`]: true,
          },
          value: {
            [`phone`]: "",
            [`password`]: "",
          },
          placeholder: {
            [`phone`]: "請輸入帳號(手機號碼)",
            [`password`]: "請輸入密碼(6~17碼)",
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
            [`phone`]: true,
          },
          value: {
            [`phone`]: "",
          },
          placeholder: {
            [`phone`]: "請輸入手機號碼",
          },
          errMsg: {},
          onSubmit: this.onForgetSubmit
        }

        this.joinForm = {
          id: "join-form",
          name: "join-form",
          title: "註冊會員",
          display: {
            [`username`]: true,
            [`phone`]: true,
            [`email`]: true,
            [`password`]: true,
          },
          value: {
            [`username`]: "",
            [`phone`]: "",
            [`email`]: "",
            [`password`]: "",
          },
          placeholder: {
            [`username`]: "真實姓名",
            [`phone`]: "手機號碼",
            [`email`]: "E-MAIL",
            [`password`]: "密碼(英數不分大小寫6~17碼)",
          },
          errMsg: {},
          onSubmit: this.onJoinSubmit
        }

        this.confirmForm = {
          id: "confirm-form",
          name: "confirm-form",
          title: "會員驗證",
          display: {
            [`phone`]: true,
            [`password`]: true,
            [`verifyCode`]: true,
          },
          value: {
            [`phone`]: "",
            [`password`]: "",
            [`verifyCode`]: "",
          },
          placeholder: {
            [`phone`]: "手機",
            [`password`]: "密碼",
            [`verifyCode`]: "請輸入驗證碼",
          },
          errMsg: {},
          onSubmit: this.onConfirmSubmit,
          onReSendConfirm: this.onReSendConfirm
        }


      },
      async onConfirmSubmit(_data) {
        var data = {
          id: _data.phone,
          pw: _data.password,
          verifyCode: _data.verifyCode,
        }
        var res = await this.api("post","ac/mb/reg/verify",data)
        if(res.resultCode===10) {
          swal("驗證成功")
          var loginData = {
            id: _data.phone,
            pw: _data.password
          }
          var loginRes = await this.api("post","ac/app/signin",loginData)
          if(loginRes.resultCode===10) {
            this.isLogin = true
          }
          this.closeModal()
        }

      },
      async onReSendConfirm(_data) {
        var data = {
          id: _data.phone,
        }
        var res = await this.api("post","ac/mb/reg/send_verify",data)
        if(res.resultCode===10) {
          swal("已重發驗證碼至手機")
        }
      },
      async onLoginSubmit(_data) {
        var data = {
          id: _data.phone,
          pw: _data.password
        }
        var res = await this.api("post","ac/app/signin",data)
        if(res.resultCode===10) {
          this.isLogin = true
          sessionStorage.setItem('isLogin', '1')

          this.closeModal()
        }
        if(res.resultCode===101) {
          this.currentForm = "confirm"
          this.confirmForm.value.phone = this.loginForm.value.phone
          this.confirmForm.value.password = this.loginForm.value.password
        }

      },
      async onForgetSubmit(_data) {
        var data = {
          id: _data.phone
        }
        var res = await this.api("post","ac/pw",data)
        if(res.resultCode===10) {
          swal("密碼已發送至您的手機")
          this.closeModal()
        }

      },
      async onJoinSubmit(_data) {
        var data = {
          "mbName" : _data.username,
          "mbEmail" : _data.email,
          "mbCell" : _data.phone,
          "mbDeviceType":"WEB",
          "Account_acSn" : {
            "acPw" : _data.password,
            "acId" : _data.phone
          }
        }

        var res = await this.jsonApi("ac/mb/reg",data)

        if(res.resultCode===101) {
          this.currentForm = "confirm"
          this.confirmForm.value.phone = this.joinForm.value.phone
          this.confirmForm.value.password = this.joinForm.value.password
        }

        if(res.resultCode===208) {
          swal("您已註冊過，請輸入簡訊驗證碼")
          this.currentForm = "confirm"
          this.confirmForm.value.phone = this.joinForm.value.phone
          this.confirmForm.value.password = this.joinForm.value.password
          console.log(this.joinForm.value)
        }
      },
      onForget() {
        this.currentForm = "forget"
      },
      onJoin() {
        this.currentForm = "join"
      },
      closeModal() {
        $.magnificPopup.close()
        this.formInit()
      }
    },
    components:{
      headerComponent: Header,
      footerComponent: Footer,
      MyForm,
      LoginForm,
      ForgetForm,
      JoinForm,
      ConfirmForm,
    }
  }
</script>

<style lang="stylus">

</style>
