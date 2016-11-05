<template>
  <form v-if="formData" :id="formData.id" :name="formData.name">
    <h1>{{formData.title}}</h1>
    <fieldset style="border:0;">
      <div v-for="(active,labelKey) in formData.display" class="form-group">
        <input type="text" class="form-control input-lg" :placeholder="formData.placeholder[labelKey]" tabindex="1" :value="formData.value[labelKey]">
      </div>
      <div class="span5"></div>
      <div class="form-group">
        <div class="row">
          <div class="col-xs-12 col-md-6"><a href="#" class="btn btn-is btn-block btn-lg" @click.prevent="formData.onSubmit">確定註冊</a></div>
          <div class="col-xs-12 col-md-6"><a href="#" class="btn btn-is btn-block btn-lg">取   消</a></div>
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
    props: {
      'formData': {
        type: Object,
        default: null
      }
    }
  }
</script>

<style lang="stylus">

</style>
