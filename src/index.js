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
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      component: Main,
      children: [
        {
          path: "",
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
          path: 'media-time',
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

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
