<template>
<div>
  <div class="header-nav">
    <ul class="nav-list">
      <router-link :to="{path: '/scape/new'}"><li>最新</li></router-link>
      <router-link :to="{path: '/scape/hot'}"><li>最热</li></router-link>
      <router-link :to="{path: '/scape/mine'}"><li>我的</li></router-link>
    </ul>
    <i class="icon iconfont icon-information" @click="showDialog"></i>
  </div>
  <router-view></router-view>
  <dialogMain></dialogMain>
</div>

</template>

<script>
import dialogMain from './Common/Dialog.vue';
export default {
  data () {
    return {

    }
  },
  methods: {
    showDialog (){
      this.$store.commit('toggleDialog',true);
    }
  },
  components: {
    dialogMain
  },
}
</script>

<style scoped>
.header-nav{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 0.88rem;
  background: #2e9e64;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  /*background: rgba(0,0,0,0.4);*/
}
.nav-list{
  width: 3.2rem;
  height: .6rem;
  background: #fff;
  border-radius: .1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 3px #fff solid;
}
.nav-list a{
  width: 33%;
  height: 100%;
  color: #fff;
  font-size: .2rem;
  text-align: center;
  line-height: .55rem;
  background: #2e9e64;
  border-right: 3px #fff solid;
}
.router-link-active{
  background-color: #fff!important;
  color: #2e9e64!important;
}
.nav-list a:last-child{
  border-right: none;
}
.icon{
  font-size: .38rem;
  color: #fff;
  position: absolute;
  top: 30%;
  right: 5%;
}
</style>
