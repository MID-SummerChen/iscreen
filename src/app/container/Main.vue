<template>
  <div>
    <div>this is template body</div>
    <h3>{{msg}}</h3>
  </div>
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
  body{
    background-color:#eee;
  }
</style>
