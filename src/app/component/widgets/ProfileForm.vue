<template>
  <form v-if="formData" class=" col-md-offset-2 col-md-8">
    <h1>{{formData.title}}</h1>
    <div class="form-group row" v-for="(active,labelKey) in formData.display" v-if="active">
      <label class="col-md-3 col-xs-12 col-form-label">{{formData.label[labelKey]}}</label>
      <div class="col-md-9 col-xs-12">
        <input class="form-control" type="text"
               v-model="formData.value[labelKey]"
               :disabled="!modifyMode">
      </div>
    </div>

    <div class="row">
      <div v-if="modifyMode" class="col-xs-12 col-md-6">
        <a href="#" class="btn btn-is btn-block btn-lg" @click.prevent="formData.onSubmit(formData.value)">確定修改</a>
      </div>
      <div v-else class="col-xs-12 col-md-6">
        <a href="#" class="btn btn-is btn-block btn-lg" @click.prevent="formData.onModify">修改會員資料</a>
      </div>
      <div class="col-xs-12 col-md-6"><a href="#" class="btn btn-is btn-block btn-lg" @click.prevent="formData.onModifyPw">修改密碼</a></div>
    </div>
  </form>
</template>
<script>
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    props: {
      'formData': {
        type: Object,
        default: null
      },
      'modifyMode': {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">

</style>
