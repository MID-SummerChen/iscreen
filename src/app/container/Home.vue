<template>
  <div>
    <div id="myModal" class="white-popup-block mfp-hide">
      <login-form v-show="currentForm === 'login'" :form-data="loginForm"></login-form>
      <forget-form v-show="currentForm === 'forget'" :form-data="forgetForm"></forget-form>
      <join-form v-show="currentForm === 'join'" :form-data="joinForm"></join-form>
    </div>

    <header-component :on-login="onLogin"></header-component>
    <slider></slider>
    <ad-stations></ad-stations>
    <video-slider></video-slider>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import Header from '../component/page/home/Header.vue'
  import Footer from '../component/page/home/Footer.vue'
  import AdStations from '../component/page/home/AdStations.vue'
  import LoginForm from '../component/page/home/LoginForm.vue'
  import ForgetForm from '../component/page/home/ForgetForm.vue'
  import JoinForm from '../component/page/home/JoinForm.vue'
  import MyForm from '../component/widgets/MyForm.vue'
  import Slider from '../component/page/home/Slider.vue'
  import VideoSlider from '../component/page/home/VideoSlider.vue'

  import Util from '../utils/util'

  export default{
    mixins: ['Util'],
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
            [`phone`]: true,
            [`password`]: true,
          },
          value: {
            [`phone`]: "55555",
            [`password`]: "1111",
          },
          placeholder: {
            [`phone`]: "請輸入手機",
            [`password`]: "請輸入密碼",
          },
          errMsg: {},
          onSubmit: this.onLoginSubmit,
          onForget: this.onForget,
          onJoin: this.onJoin
        }

        this.forgetForm = {
          id: "forget-form",
          name: "forget-form",
          title: "忘記密碼",
          display: {
            [`phone`]: true,
            [`password`]: true,
          },
          value: {
            [`phone`]: "",
            [`password`]: "",
          },
          placeholder: {
            [`phone`]: "請輸入手機",
            [`password`]: "請輸入密碼",
          },
          errMsg: {},
          onSubmit: this.onForgetSubmit
        }

        this.joinForm = {
          id: "join-form",
          name: "join-form",
          title: "加入會員",
          display: {
            [`phone`]: true,
            [`password`]: true,
          },
          value: {
            [`phone`]: "",
            [`password`]: "",
          },
          placeholder: {
            [`phone`]: "請輸入手機",
            [`password`]: "請輸入密碼",
          },
          errMsg: {},
          onSubmit: this.onJoinSubmit
        }


      },
      getFormData() {

      },
      onLoginSubmit() {

      },
      onForgetSubmit() {

      },
      onJoinSubmit() {

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
      AdStations,
      MyForm,
      LoginForm,
      ForgetForm,
      JoinForm,
      Slider,
      VideoSlider
    }
  }
</script>

<style lang="stylus">

</style>
