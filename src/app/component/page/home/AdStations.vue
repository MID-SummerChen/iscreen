<template>
  <div id="fh5co-tour" data-section="tour">
    <div class="container-fliud">


      <div class="arrow2 animate-box" data-animate-effect="fadeInDown"></div>

      <div class="row">
        <div class="col-md-12">
          <div class="row" v-if="mediaClsList ? mediaClsList.length > 0 : null">
            <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <router-link class="Simon" :to="{name:'mediaTime',params:{sn: mediaClsList[0].i18n.medSn}}">
                <div class="overlay">
                  <h1>{{mediaClsList[0].i18n.medTitle_Lang1}}</h1>
                  <div class="info">{{mediaClsList[0].i18n.medSubtitle_Lang1}}</div>
                  <div class="btn btn-primary btn-center btn-lg">立即預定</div>
                </div>


              </router-link>
            </div>


            <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <router-link class="Simon" :to="{path:'media-time'}">
                <div class="overlay">
                  <h1>{{mediaClsList[1].i18n.medTitle_Lang1}}</h1>
                  <div class="info">{{mediaClsList[1].i18n.medSubtitle_Lang1}}</div>
                  <div class="btn btn-primary btn-center btn-lg">立即預定</div>
                </div>

              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  import SummerMain from '../../../../../static/js/summerMain'
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    computed: {
      adMedia() {
        return this.mediaClsList ? this.mediaClsList[0] : null
      }
    },
    components:{
      headerComponent: Header,
      footerComponent: Footer,
    },
    props: {
      mediaClsList: Array
    },
    updated() {
      SummerMain.all()
    },
    methods: {

    }
  }
</script>

<style lang="stylus">

</style>
