<template>
  <div class="mainCon">
  	<div class="icon" @click="goLog" v-if="isReg"><i class="iconfont icon-close"></i></div>
  	<div class="logo"><img src="static/image/logo.png" alt=""></div>
  	<div class="name">旅途</div>
  	<div class="logform" v-if='isLog'>
	  	<form>
	  		<input class='email' type="email" placeholder="输入账号邮箱" v-model:value='form.email'>
	  		<input class='password' type="password" placeholder="输入密码" v-model:value='form.password'>
	  		<button type="button" @click="logIn">登录</button>
	  	</form>
  	</div>
  	<div class="regform" v-if='isReg'>
	  	<form>
	  		<input class='email' type="email" placeholder="输入常用邮箱" v-model:value='form.email'>
	  		<input class='user' type="text" placeholder="输入昵称" v-model:value='form.user'>
	  		<input class='password' type="password" placeholder="输入密码" v-model:value='form.password'>
	  		<button>注册</button>
	  	</form>
  	</div>
  	<div class="action" v-if='isLog'>
  		<p @click="goReg">注册账号</p>
  		<p>忘记密码</p>
  	</div>
  	<div class="readMe" v-if='isReg'>
  		注册即同意条款<em>用户条款</em>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLog: true,
      isReg: false,
      form: {
      	user: '',
      	email: '',
      	password: ''
      }
    }
  },
  methods: {
  	goReg: function(){
  		this.$router.push({path: '/register'})
  		this.isLog = false
  		this.isReg = true
  	},
  	goLog: function(){
  		this.$router.push({path: '/login'})
  		this.isLog = true
  		this.isReg = false
  	},
  	logIn: function(){
  		this.$http.get('../../../static/mock/userInfo.json').then(res => {
	        if(this.form.email == res.data.email){
	        	if(this.form.password == res.data.password){
	        		this.$store.commit('openMessage',{type:'success',content:'登录成功！',isopen:true});
	        		//this.$message('success','登录成功！')
	        		this.$router.push({path: './scape/new'})
	        	}else{
	        		this.$store.commit('openMessage',{type:'error',content:'密码错误！',isopen:true});
	        	}
	        }else{
	        	this.$store.commit('openMessage',{type:'error',content:'用户名不存在！',isopen:true});
	        }
	    }, res => {
	        console.log(res)
	    })
  	}
  },
  mounted: function(){
  	let hash = window.location.hash;
  	let _hash = hash.replace(/#\//g,'');
  	if(_hash == 'login'){
  		this.isLog = true
  		this.isReg = false
  	}else if(_hash == 'register'){
  		this.isLog = false
  		this.isReg = true
  	}
  }
}
</script>

<style scoped>
.mainCon{
	width: 100%;
	height: 100%;
	background-color: #2e9e64;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	top: 0;
	left: 0;
	z-index: 99;
}
.icon{
	width: .35rem;
	height: .35rem;
	position: absolute;
	right: 5%;
	top: 3%;
}
.icon i{
	display: block;
	font-size: .4rem;
}
.logo{
	width: 2rem;
	height: 2rem;
	margin-bottom: .3rem;
}
.logo img{
	width: 100%;
	height: 100%;
}
.name{
	font-size: .38rem;
	color: #fff;
	margin-bottom: .7rem;
}
.mainCon input{
	width: 5.2rem;
	height: .9rem;
	border-radius: .5rem;
	border: 2px #fff solid;
	background-color: #2e9e64;
	color: rgba(255,255,255,.7);
	font-size: .28rem;
	text-indent: 4em;
	margin-bottom: .5rem;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(255,255,255,.7);
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(255,255,255,.7);
}

input:-ms-input-placeholder{
    color: rgba(255,255,255,.7);
}

input::-webkit-input-placeholder{
    color: rgba(255,255,255,.7);
}
.user{
	background: url('../../static/image/user.png') no-repeat 8% center;
	background-size: 6%; 
}
.email{
	background: url('../../static/image/email.png') no-repeat 8% center;
	background-size: 6%;
}
.password{
	background: url('../../static/image/password.png') no-repeat 8% center;
	background-size: 6%;
}
.mainCon button{
	width: 5.2rem;
	height: .9rem;
	border-radius: .5rem;
	background-color: #fff;
	color: #2e9e64;
	font-size: .28rem;
	margin-top: .2rem;
}
.mainCon form{
	display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.action{
	width: 4.8rem;
	font-size: .22rem;
	color: rgba(255,255,255,.7);
	display: flex;
	justify-content: space-between;
	margin-top: .2rem;
}
.readMe{
	font-size: .2rem;
	position: absolute;
	bottom: 0.2rem;
}
.readMe em{
	font-style: normal;
	color: #2180d0;
}
</style>
