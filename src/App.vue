<template>
  <div id="app">
    <router-view></router-view>
    <footerMain></footerMain>
    <messageMain></messageMain>
  </div>
</template>

<script>
import footerMain from './components/common/Footer.vue';
import messageMain from './components/common/Message.vue';
let Data = {
    userInfo:{
      userName:'登录',
      userAva: 'assets/image/defaultAva.jpg'
    }
  };
export default {
  name: 'app',
  components: {
    footerMain,
    messageMain
  },
  data: function () {
    return Data;
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
::selection{
  background: transparent;
}
html,body{
  width: 100%;
  height: 100%;
  font-family: Arial;
}
ul,li{
    list-style: none;
}
a{
  text-decoration: none;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
