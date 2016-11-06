<template>
  <div id="fh5co-tour" data-section="tour">
    <div class="container-fliud">


      <div class="arrow2 animate-box" data-animate-effect="fadeInDown"></div>

      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <router-link class="Simon" :to="{path:'media-time'}">
                <div class="overlay">
                  <h1>西門站</h1>
                  <div class="info">有效掌握網路廣告最新訊息，發揮產品優勢 ，提高顧客購買詢問度，創造效益！</div>
                  <div class="btn btn-primary btn-center btn-lg">立即預定</div>
                </div>

              </router-link>
            </div>


            <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <router-link class="Simon" :to="{path:'media-time'}">
                <div class="overlay">
                  <h1>頂好商圈</h1>
                  <div class="info">有效掌握網路廣告最新訊息，發揮產品優勢 ，提高顧客購買詢問度，創造效益！</div>
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
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    components:{
      headerComponent: Header,
      footerComponent: Footer,
    }
  }
</script>

<style lang="stylus">

</style>
