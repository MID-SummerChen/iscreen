<template>
  <div>
    <slider></slider>
    <ad-stations :media-list="mediaList"></ad-stations>
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
      mediaList() {
        return this.$parent.mediaList ? this.$parent.mediaList : null
      }
    },
    beforeMount() {
      this.checkIfLogin()
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
