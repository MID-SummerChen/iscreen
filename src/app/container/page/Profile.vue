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
          <div class="number_box" v-if="formReady">
            <profile-form v-show="currentForm === 'profile'" :form-data="profileForm" :modify-mode="modifyMode"></profile-form>
            <pw-form v-show="currentForm === 'pw'" :form-data="pwForm"></pw-form>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>

  import apiUtil from '../../utils/apiUtil'
  import comUtil from '../../utils/comUtil'
  import ProfileForm from '../../component/widgets/ProfileForm.vue'
  import PwForm from '../../component/widgets/PwForm.vue'

  export default{
    mixins: [apiUtil,comUtil],
    components: {
      ProfileForm,
      PwForm
    },
    data(){
      return{
        pwForm: null,
        profileForm: null,
        modifyMode: false,
        formReady: false,
        currentForm: 'profile',
        roleType: "MB"
      }
    },
    beforeMount() {
      this.getFormData()
    },
    mounted() {
    },
    methods: {
      onModify() {
        this.modifyMode = true
      },
      profileFormInit() {
        this.profileForm = {
          id: "profile-form",
          name: "profile-form",
          title: "會員資訊",
          display: {
            [`username`]: true,
            [`email`]: true,
            [`address`]: true,
            [`other_phone`]: true,
          },
          label: {
            [`username`]: "姓名",
            [`email`]: "E-Mail",
            [`address`]: "地址",
            [`other_phone`]: "其他電話",
          },
          value: {
            [`username`]: this.userInfo.Member_mbSn.mbName || "",
            [`email`]: this.userInfo.Member_mbSn.mbEmail || "",
            [`address`]: this.userInfo.Member_mbSn.mbNation || "",
            [`other_phone`]: this.userInfo.Member_mbSn.mbCell || "",
          },
          errMsg: {},
          onSubmit: this.onModifySubmit,
          onModify: this.onModify,
          onModifyPw: this.onModifyPw,
        }
      },
      pwFormInit() {
        this.pwForm = {
          id: "pw-form",
          name: "pw-form",
          title: "修改密碼",
          display: {
            [`old_pw`]: true,
            [`new_pw`]: true,
          },
          label: {
            [`old_pw`]: "舊密碼",
            [`new_pw`]: "新密碼",
          },
          value: {
            [`old_pw`]: "",
            [`new_pw`]: "",
          },
          errMsg: {},
          onSubmit: this.onPwSubmit,
          onCancel: this.onPwCancel,
        }
      },
      formInit() {
        this.profileFormInit()
        this.pwFormInit()
      },
      async onPwSubmit(_data) {
        var mb_sn = this.userInfo.Member_mbSn.mbSn
        var data = {
          [`old_pw`]: _data[`old_pw`],
          [`new_pw`]: _data[`new_pw`],
        }
        var res = await this.api("post",`ac/${_.toLower(this.roleType)}/${mb_sn}/pw/update`,data)
        if(res.resultCode===10) {
          swal("密碼修改成功")
          this.currentForm = "profile"
          this.pwFormInit()
        }
      },
      onPwCancel() {
        this.currentForm = "profile"
        this.pwFormInit()
      },
      onModifyPw() {
        this.currentForm = "pw"
      },
      async getFormData() {
        var res = await this.api("get","ac/cms/signined")

        if(res.resultCode===10) {
          this.userInfo = res.response
          this.roleType = this.userInfo.acRoleType
          this.formInit()
          this.formReady = true
        }
      },
      async onModifySubmit(_data) {
        var mb_sn = this.userInfo.Member_mbSn.mbSn
        var data = {
          mbName: _data.username,
          mbNation: _data.address,
          mbRegType: "DEFAULT",
          mbDeviceType: "ANDROID",
          mbEmail: _data.email,
          mbCell: _data.phone,
          mbType: "DEFAULT"
        }
        var res = await this.jsonApi(`ac/${_.toLower(this.roleType)}/${mb_sn}/update`,data)
        if(res.resultCode===10) {
          swal("修改成功")
          this.modifyMode = false
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.checkIfLogin()
      })
    }
  }
</script>

<style lang="stylus">

</style>
