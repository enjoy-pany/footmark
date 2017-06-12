<template>
<div class="mineCon">
	<div class="userInfo">
		<div class="mu-avatar">
			<img :src="userInfo.avatar" />
		</div>
		<div class="userName">{{userInfo.name}}</div>
		<div class="userDesc">{{userInfo.desc}}</div>
	</div>
	<div class="seleList">
	  	<ul class="seleListMar mu-list">
	    	<li class="mu-list-item">
		    	<i class="iconfont icon-form"></i>
		    	<p>修改资料</p>
		    	<i class="iconfont icon-more"></i>
	    	</li>
	    	<li class="mu-list-item">
		    	<i class="iconfont icon-jewelry"></i>
		    	<p>成为VIP</p>
		    	<i class="iconfont icon-more"></i>
	    	</li>
	  	</ul>
	  	<ul class="seleListMar mu-list">
	    	<li class="mu-list-item">
		    	<i class="iconfont icon-comments"></i>
		    	<p>系统通知</p>
		    	<i class="iconfont icon-more"></i>
	    	</li>
	  	</ul>
	  	<ul class="seleListMar mu-list">
	    	<li class="mu-list-item">
		    	<i class="iconfont icon-good"></i>
		    	<p>好评鼓励</p>
		    	<i class="iconfont icon-more"></i>
	    	</li>
	    	<li class="mu-list-item">
		    	<i class="iconfont icon-viewgallery"></i>
		    	<p>更多功能</p>
		    	<i class="iconfont icon-more"></i>
	    	</li>
	    	<li class="mu-list-item">
		    	<i class="iconfont icon-set"></i>
		    	<p>设置</p>
		    	<i class="iconfont icon-more"></i>
	    	</li>
	    	<li class="mu-list-item">
		    	<i class="iconfont icon-gifts"></i>
		    	<p>分享有礼</p>
		    	<i class="iconfont icon-more"></i>
	    	</li>
	  	</ul>
	</div>
	<div class="exitBtn">
		<button class="btn" type="button">退出登录</button>
	</div>
</div>

</template>

<script>
export default {
  data () {
    return {
      userInfo:{
      	name: 'Pany',
      	avatar: require('../assets/defaultAva.jpg'),
      	desc: 'wish sunshine everyday',
      }
    }
  }
}
</script>

<style scoped>
.mineCon{
	width: 100%;
	height: 100%;
	background: #eff4f7;
	/*margin-bottom: 1rem; */
}
.userInfo{
	width: 100%;
	height: 3.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: #00bcd4;
	margin-bottom: .3rem;
	color: #fff;
	font-size: .24rem;
}
.userName{
	font-size: .34rem;
	margin-top: .1rem;
}
.userDesc{
	margin-top: .1rem;
}
.seleListMar{
	margin-bottom: .2rem;
}
.mu-list{
	width: 100%;
	background: #fff;
	font-size: .24rem;
}
.mu-list>li{
	width: 100%;
	height: .9rem;
	display: flex;
	justify-content: center;
	align-content: center;
}
.mu-list>li>i{
	font-size: .4rem;
	color: #31a067;
	line-height: .9rem;
}
.mu-list>li>p{
	width: 80%;
	height: 100%;
	line-height: .9rem;
	text-indent: 2em;
}
.exitBtn{
	width: 100%;
	height: 1.5rem;
	text-align: center;
	margin-bottom: 1rem;
	background: #eff4f7;
}
.btn{
	width: 4rem;
	height: .6rem;
	border: none;
	background: #ee7a7a;
	font-size: .3rem;
	color: #fff;
	border-radius: .1rem;
}
</style>
