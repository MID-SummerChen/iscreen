<template>
  <header role="banner" id="fh5co-header">
    <div class="container">
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
          <router-link class="navbar-brand" :to="{ path: '/' }"></router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><router-link :to="{path: '/'}"><span>首頁</span></router-link></li>
            <li v-if="isLogin" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span>立即預定</span> <b class="caret"></b></a>
              <ul class="dropdown-menu m_d_m">
                <li v-for="cls in mediaList">
                  <router-link :to="{name:'mediaTime',params: { sn: cls.i18n.medSn }}">{{cls.i18n.medTitle_Lang1}}</router-link>
                </li>
              </ul>
            </li>
            <li v-if="isLogin" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span>會員中心</span> <b class="caret"></b></a>
              <ul class="dropdown-menu m_d_m">
                <li><router-link :to="{path:'/profile'}">會員資訊</router-link></li>
                <li><router-link :to="{path:'/expen-record'}">消費記錄</router-link></li>
                <li><router-link :to="{path:'/frame-record'}">影格紀錄</router-link></li>
                <li><router-link :to="{path:'/publish-record'}">刊登紀錄</router-link></li>
                <li><router-link :to="{path:'/upload'}">影片上傳</router-link></li>
              </ul>
            </li>
            <li>
              <a v-if="isLogin" @click.prevent="onLogout"><span>登出</span></a>
              <a v-else v-popup href="#myModal" @click.prevent="onLogin"><span>登入</span></a>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  import comUtil from '../../../utils/comUtil'
  export default{
    mixins: [comUtil],
    data(){
      return{
        msg:'hello vue'
      }
    },
    props:{
      onLogin: Function,
      onLogout: Function,
      isLogin: Boolean,
      mediaList: Array,
    }
  }
</script>

<style lang="stylus" scoped>
  ul > li > a
    cursor: pointer
</style>
