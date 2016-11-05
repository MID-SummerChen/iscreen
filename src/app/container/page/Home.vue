<template>
  <div>
    <slider></slider>
    <ad-stations></ad-stations>
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
      }
    },
    mounted() {
    },
    methods: {

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
