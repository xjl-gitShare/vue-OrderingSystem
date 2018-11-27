// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import {store} from './store/store.js'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://wd7345996787xsllzu.wilddogio.com/'

// router.beforeEach((to,from,next) =>{
//     // alert('还没有登录，请先登录！');
//     // next();
//     console.log(to);
//     //判断store.gettes.isLogin === false
//     if(to.path == '/login' || to.path == '/register'){
//         next();
//     }else{
//         alert('还没有登录，请先登录！');
//         next('/login');
//     }
// })
//
// 后置钩子
// router.afterEach((to,from) =>{
//     alert("after each");
// })

// https://wd7345996787xsllzu.wilddogio.com/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

