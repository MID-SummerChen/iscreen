import Vue from 'vue';
import Main from './app/container/Main.vue';

import './index.styl';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Main
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
