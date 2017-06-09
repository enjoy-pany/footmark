<template>
  <div id="app">
    <router-view></router-view>
    <footerMain></footerMain>
  </div>
</template>

<script>
import footerMain from './components/common/Footer.vue';
let Data = {
    userInfo:{
      userName:'登录',
      userAva: 'assets/image/defaultAva.jpg'
    }
  };
export default {
  name: 'app',
  components: {
    footerMain
  },
  data: function () {
    return Data;
  }
}
</script>

<style>
</style>
