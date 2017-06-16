<template>
<div class="detaMain">
	<div class="detaHeader">
		<div class="h-left" @click="goBack">
			<i class="iconfont icon-back"></i>
		</div>
		<div class="h-right">
			<i class="iconfont icon-delete"></i>
			<i class="iconfont icon-fenxiang"></i>
		</div>
	</div>
	<div class="detaCon">
		<div class="detaTitle">
			<div class="date">{{date}}</div>
			<div class="position"><i v-if="position" class="iconfont icon-map"></i>{{position}}</div>
		</div>
		<div class="detaList" v-for='item in list'>
			<img :src="item.img" alt="">
		</div>
	</div>
</div>

</template>

<script>
export default {
  data () {
    return {
      id: 1,
      date: '2017.06.14',
      position: '北京市密云雾灵西峰风景区',
      list: []
    }
  },
  mounted: function(){
    this.$http.get('../../../static/mock/detail.json').then(res => {
        this.list = res.data;
    }, res => {
        console.log(res)
    })
  },
  methods: {
  	goBack: function(){
  		this.$router.push({path: './trace'});
  	}
  }
}
</script>

<style scoped>
.detaMain{
	width: 100%;
	background: #fff;
	position: relative;
	left: 0;
	top: 0;
	z-index: 99;
}
.detaHeader{
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  background: #2e9e64;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.h-right{
	display: flex;
	justify-content: center;
	align-items: center;
}
.detaCon{
	width: 100%;
	padding: 0 .3rem;
	box-sizing: border-box;
  	margin-bottom: 1rem;
}
.detaHeader i{
	display: block;
	color: #fff;
	font-size: .3rem;
	margin: 0 .3rem;
}
.detaTitle{
	width: 100%;
	height: 1rem;
	border-bottom: 2px #e6e6e6 solid;
	margin-bottom: .3rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.date{
	line-height: 1.5rem;
	height: 100%;
	font-size: .44rem;
}
.position{
	line-height: 1.5rem;
	height: 100%;
	font-size: .2rem;
	color: rgba(0,0,0,.5);
}
.position i{
	color: #000;
	font-size: .2rem;
	margin-right: .1rem;
}
.detaList{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.detaList img{
	width: 100%;
	height: 100%;
	margin-bottom: .2rem;
	border-radius: 5%;
}
</style>
