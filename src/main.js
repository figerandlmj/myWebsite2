// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 引入公共样式
import '@/assets/css/common'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/permission'

import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './vuex'

Vue.config.productionTip = false

Vue.use(ElementUI);

// axios , 为什么 IE 浏览器不识别(IE9+),IE 整个家族都不支持 promise
require("es6-promise").polyfill();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
