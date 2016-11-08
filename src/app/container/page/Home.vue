<template>
  <div>
    <slider></slider>
    <ad-stations :media-cls-list="mediaClsList"></ad-stations>
    <video-slider></video-slider>
  </div>
</template>
<script>

  import apiUtil from '../../utils/apiUtil'
  import comUtil from '../../utils/comUtil'
  import Slider from '../../component/page/home/Slider.vue'
  import VideoSlider from '../../component/page/home/VideoSlider.vue'
  import AdStations from '../../component/page/home/AdStations.vue'
  import SummerMain from '../../../../static/js/summerMain'

  export default{
    mixins: [apiUtil,comUtil],
    data() {
      return {}
    },
    computed: {
      mediaClsList() {
        return this.$parent.mediaClsList ? this.$parent.mediaClsList : null
      }
    },
    mounted() {
      console.log("m")
    },
    updated() {
      console.log("u")
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
