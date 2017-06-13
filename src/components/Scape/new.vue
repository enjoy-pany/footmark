<template>
  <div class="mainCon">
    <div class="card" v-for="item in list">
      <div class="card-header">
        <div class="avatar"><img :src="item.avatar" alt=""></div>
        <div class="userInfo">
          <div class="header-title">{{item.author}}</div>
          <div class="header-sub-title">{{item.desc}}</div>
        </div>
      </div>
      <div class="card-media">
        <img :src="item.image" />
        <div class="card-img-title">
          <div class="img-title">{{item.imageTitle}}</div>
          <div class="img-sub-title">{{item.imageSubTitle}}</div>
        </div>
      </div>
      <div class="card-text">{{item.content}}</div>
      <div class="card-actions">
        <span class="time">4小时前</span>
        <i id="favorite" class="iconfont icon-good"></i>
        <i id="good" class="iconfont icon-favorite"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    
  },
  mounted: function(){
    this.$http.get('../../../static/mock/new.json').then(response => {
        this.list = response.data;
    }, response => {
        console.log(response)
    })
  }
}
</script>

<style scoped>
.mainCon{
  width: 100%;
  padding: 0 .1rem;
  margin-top: 0.88rem;
  margin-bottom: 1.1rem;
  box-sizing: border-box;
}
.card{
    width: 100%;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    margin: .1rem 0;
}
.card-header{
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
}
.avatar{
  width: .6rem;
  height: .6rem;
  border-radius: .3rem;
  margin: 0 .2rem;
}
.avatar>img{
  display: block;
  width: 100%;
  height: 100%;
}
.header-title{
  font-size: .24rem;
}
.header-sub-title{
  font-size: .20rem;
  color: rgba(0,0,0,.57);
}
.card-media{
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
}
.card-img-title{
  width: 100%;
  height: 1rem;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: .2rem;
  background: rgba(0,0,0,0.5);
  padding: .2rem;
  box-sizing: border-box;
}
.card-media>img{
  display: block;
  width: 100%;
  height: 100%;
}
.card-text{
  width: 100%;
  font-size: .09rem;
  padding: 0.3rem .2rem;
  box-sizing: border-box;
}
.img-title{
  color: rgba(255,255,255,.9);
  font-size: .28rem;
}
.img-sub-title{
  color: rgba(255,255,255,.5);
  font-size: .2rem;
  margin: 0.1rem 0;
}
.card-actions{
  width: 100%;
  height: .5rem;
  font-size: .18rem;
  padding: 0 .2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card-actions>i{
  font-size: .24rem;
}
.time{
  color: rgba(0,0,0,0.7);
}
</style>
