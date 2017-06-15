<template>
  <div>
    <div class="message" type='success' v-if="isSuc">
      <div class="leftIcon" style="background: rgb(19, 206, 102)"><i class="iconfont icon-smile"></i></div>
      <div class="contet">{{content}}</div>
    </div>
    <div class="message" type='warning' v-if="isWar">
      <div class="leftIcon" style="background: rgb(247, 186, 42)"><i class="iconfont icon-selected"></i></div>
      <div class="contet">{{content}}</div>
    </div>
    <div class="message" type='error' v-if="isErr">
      <div class="leftIcon" style="background: rgb(255, 73, 73)"><i class="iconfont icon-cry"></i></div>
      <div class="contet">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      
    }
  },
  methods: {
    
  },
  computed: {
    content: function(){
      return this.$store.state.messContent
    },
    isSuc: function(){
      return this.$store.state.success
    },
    isWar: function(){
      return this.$store.state.warning
    },
    isErr: function(){
      return this.$store.state.error
    }
  },
  updated: function(){
    setTimeout(()=>{
      this.$store.commit('openMessage',{type:'success',content:'登录成功！',isopen:false});
      this.$store.commit('openMessage',{type:'warning',content:'登录成功！',isopen:false});
      this.$store.commit('openMessage',{type:'error',content:'登录成功！',isopen:false});
    },3000) 
  }
}
</script>

<style>
.message{
  width: 60%;
  height: .6rem;
  position: fixed;
  top: 5%;
  left: 20%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.leftIcon{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: .6rem;
}
.leftIcon i{
  font-size: .4rem;
  color: #fff;
}
.contet{
  width: 80%;
  height: .6rem;
  font-size: .2rem;
  color: #8391a5;
  text-align: left;
  text-indent: 1em;
  line-height: .6rem;
}
</style>
