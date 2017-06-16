// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store';
import axios from 'axios'

Vue.config.productionTip = false

//Vue.use(axios)
Vue.prototype.$http = axios

Vue.prototype.$message = (type,content) => {
    console.log(this)
    //this.$store.commit('openMessage',{type:type,content:contnet});
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
