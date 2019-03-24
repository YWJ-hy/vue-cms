// 入口文件
import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

import {Header,Swipe,SwipeItem} from 'mint-ui';
Vue.component(Header.name,Header);//Header.name这是mint-ui的Header标签的名字，可以直接使用
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import vueResource from 'vue-resource';
Vue.use(vueResource);

import router from './router.js';

//最后导入App.vue
import app from './App.vue';


var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
});
