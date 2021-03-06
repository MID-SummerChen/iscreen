import Vue from 'vue';
import Main from './app/container/Main.vue';
import Home from './app/container/page/Home.vue';
import PublishRecord from './app/container/page/PublishRecord.vue';
import FrameRecord from './app/container/page/FrameRecord.vue';
import ExpenRecord from './app/container/page/ExpenRecord.vue';
import Profile from './app/container/page/Profile.vue';
import MediaTime from './app/container/page/MediaTime.vue';
import Upload from './app/container/page/Upload.vue';

import './index.styl';
import VueRouter from 'vue-router';
import SummerMain from '../static/js/summerMain'


Vue.use(VueRouter);
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);

const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'publish-record',
          component: PublishRecord
        },
        {
          path: 'frame-record',
          component: FrameRecord,
        },
        {
          path: 'expen-record',
          component: ExpenRecord
        },
        {
          path: 'profile',
          component: Profile
        },
        {
          path: 'media-time/:sn',
          name: 'mediaTime',
          component: MediaTime
        },
        {
          path: 'upload',
          component: Upload
        },

      ]
    }

  ]
});


router.beforeEach((to,from,next)=>{
  console.log("hi")
  next()
})

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
