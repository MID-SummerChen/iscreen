<template>
  <div id="root">
    <header-component></header-component>
    <main>
      <title-component></title-component>
      <techs></techs>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Header from './Header.vue';
import Title from './Title.vue';
import Techs from './techs/Techs.vue';
import Footer from './Footer.vue';

import $ from 'jquery'

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'title-component': Title,
    'techs': Techs,
    'footer-component': Footer
  },
  created() {
    $.ajax({
      method: "POST",
      url: "http://113.196.112.149:8080/adps_dev/api/ac/cms/signin",
      data: {
        id: "admin@gmail.com",
        pw: "admin2016"
      },
      xhrFields: {withCredentials: true},
      crossDomain: true
    }).then(res=>{
      console.log(res)
    })
  }
};
</script>
