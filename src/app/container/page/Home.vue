<template>
  <div>
    <slider></slider>
    {{mediaClsList}}
    <ad-stations v-if="foo" :media-cls-list="mediaClsList"></ad-stations>
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
        mediaClsList: [],
        foo: false
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
        this.foo = true
        console.log(this.mediaClsList[0].i18n.medClsName_Lang1)
        this.contentWayPoint()
      },
      contentWayPoint() {
        var i = 0;
        $('.animate-box').waypoint( function( direction ) {

          if( direction === 'down' && !$(this.element).hasClass('animated') ) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function(){

              $('body .animate-box.item-animate').each(function(k){
                var el = $(this);
                setTimeout( function () {
                  var effect = el.data('animate-effect');
                  if ( effect === 'fadeIn') {
                    el.addClass('fadeIn animated');
                  } else if ( effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft animated');
                  } else if ( effect === 'fadeInRight') {
                    el.addClass('fadeInRight animated');
                  } else {
                    el.addClass('fadeInUp animated');
                  }

                  el.removeClass('item-animate');
                },  k * 200, 'easeInOutExpo' );
              });

            }, 100);

          }

        } , { offset: '85%' } );
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
