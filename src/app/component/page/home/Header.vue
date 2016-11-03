<template>
  <header role="banner" id="fh5co-header">
    <div class="container">
      <!-- <div class="row"> -->
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <!-- Mobile Toggle Menu Button -->
          <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
          <a class="navbar-brand" href="index.html"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="#" data-nav-section="home"><span>首頁</span></a></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span>立即預定</span> <b class="caret"></b></a>
              <ul class="dropdown-menu m_d_m">
                <li><a href="media_time.html">西門站</a></li>
                <li><a href="media_time.html">頂好商圈</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span>會員中心</span> <b class="caret"></b></a>
              <ul class="dropdown-menu m_d_m">
                <li><a href="member_profile.html">會員資訊</a></li>
                <li><a href="expen_record.html">消費記錄</a></li>
                <li><a href="frame_record.html">影格紀錄</a></li>
                <li><a href="publish_record.html">刊登紀錄</a></li>
                <li><a href="upload_movies.html">影片上傳</a></li>
              </ul>


            </li>




            <li><a class="popup-with-form" href="#login-form"><span>登入</span></a></li>
          </ul>
        </div>
      </nav>
      <!-- </div> -->
    </div>
  </header>
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

</style>
