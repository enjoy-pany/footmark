<template>
<div>
	<div class="userInfo">
		<mu-avatar slot="left" :src="userInfo.avatar" :size="100" />
		<div class="userName">{{userInfo.name}}</div>
		<div class="userDesc">{{userInfo.desc}}</div>
	</div>
	<div class="seleList">
	  <mu-list class="seleListMar">
	    <mu-list-item title="资料修改" titleClass="title-size">
	      <mu-icon slot="left" value="inbox" :size="30" color="#009688"/>
	    </mu-list-item>
	    <mu-divider />
	    <mu-list-item title="成为VIP" titleClass="title-size">
	      <mu-icon slot="left" value="send" :size="30" color="#009688"/>
	    </mu-list-item>
	  </mu-list>
	  <mu-list class="seleListMar">
	    <mu-list-item title="系统通知">
	      <mu-icon slot="left" value="drafts" :size="30" color="#009688"/>
	    </mu-list-item>
	  </mu-list>
	  <mu-list class="seleListMar">
	    <mu-list-item title="好评鼓励">
	      <mu-icon slot="left" value="info" :size="30" color="#009688"/>
	    </mu-list-item>
	    <mu-divider />
	    <mu-list-item title="更多功能">
	      <mu-icon slot="left" value="info" :size="30" color="#009688"/>
	    </mu-list-item>
	    <mu-divider />
	    <mu-list-item title="设置">
	      <mu-icon slot="left" value="info" :size="30" color="#009688"/>
	    </mu-list-item>
	    <mu-divider />
	    <mu-list-item title="分享给朋友">
	      <mu-icon slot="left" value="info" :size="30" color="#009688"/>
	    </mu-list-item>
	  </mu-list>
	</div>
	<div class="exitBtn">
		<mu-raised-button label="退出登录" class="exit-button" secondary/>
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
.userInfo{
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: #00bcd4;
	margin-bottom: 30px;
	color: #fff;
	font-size: 18px;
}
.userName{
	font-size: 22px;
	margin-top: 10px;
}
.seleListMar{
	margin-bottom: 20px;
}
.title-size{
	font-size: 20px;
}
.exitBtn{
	text-align: center;
}
.exit-button{
	width: 50%;
	height: 50px;
	font-size: 22px;
	border-radius: 30px;
}
</style>
