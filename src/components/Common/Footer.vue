<template>
<mu-paper>
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item to="trace" value="trace" title="Trace" icon="restore"/>
    <mu-bottom-nav-item to="scape" value="scape" title="Scape" icon="favorite"/>
    <mu-bottom-nav-item to="my" value="mine" title="Mine" icon="location_on"/>
  </mu-bottom-nav>
</mu-paper>
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
.mu-bottom-nav{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>