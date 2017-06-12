<template>
<div>
  <ul class="bottom-nav">
    <li>
      <router-link :to="{path: '/trace'}">
        <i class="iconfont icon-jiaoyin1"></i>
        <span>印记</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{path: '/scape'}">
        <i class="iconfont icon-qrcode"></i>
        <span>风景</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{path: '/my'}">
        <i class="iconfont icon-account"></i>
        <span>我的</span>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'trace'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style>
.bottom-nav{
  width: 100%;
  height: 1rem;
  background-color: #fff;
  border-top: 1px #a7abad solid;
  display: flex;
  justify-content: space-around;
  align-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
}
.bottom-nav>li>a{
  display: flex;
  align-content: center;
  flex-direction: column;
}
.bottom-nav>li i{
  text-align: center;
  font-size: .36rem;
  color: #929292;
  margin: .2rem 0 .1rem 0;;
}
.bottom-nav>li span{
  font-size: .20rem;
  color: #929292;
}
</style>