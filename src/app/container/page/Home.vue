<template>
  <div>
    <slider></slider>
    <ad-stations v-show="mediaClsList.length>0" :media-cls-list="mediaClsList"></ad-stations>
    <video-slider></video-slider>
  </div>
</template>
<script>

  import apiUtil from '../../utils/apiUtil'
  import Slider from '../../component/page/home/Slider.vue'
  import VideoSlider from '../../component/page/home/VideoSlider.vue'
  import AdStations from '../../component/page/home/AdStations.vue'

  export default{
    mixins: [apiUtil],
    data(){
      return{
        mediaClsList: []
      }
    },
    beforeMount() {

    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        var res = await this.api("get","med/cls")
        this.mediaClsList = res.response.items
        console.log(this.mediaClsList[0].i18n.medClsName_Lang1)
      }
    },
    components:{
      AdStations,
      Slider,
      VideoSlider
    }
  }
</script>

<style lang="stylus">

</style>
