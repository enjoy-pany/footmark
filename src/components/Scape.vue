<template>
<div>
  <div class="header-nav">
    <ul class="nav-list">
      <li>最新</li>
      <li>最热</li>
      <li>我的</li>
    </ul>
    <i class="icon iconfont icon-information"></i>
  </div>

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

</div>

</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1',
      list: [{
        avatar: require('../assets/defaultAva.jpg'),
        author: 'Myron',
        desc: 'sub title',
        image: require('../assets/008.jpg'),
        imageTitle: 'Breakfast',
        imageSubTitle: 'image sub title',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光, 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！',
        featured: true
      }, {
        avatar: require('../assets/defaultAva.jpg'),
        author: 'Myron',
        desc: 'sub title',
        image: require('../assets/002.jpg'),
        imageTitle: 'Breakfast',
        imageSubTitle: 'image sub title',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光, 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！',
        featured: true
      }, {
        avatar: require('../assets/defaultAva.jpg'),
        author: 'Myron',
        desc: 'sub title',
        image: require('../assets/003.jpg'),
        imageTitle: 'Breakfast',
        imageSubTitle: 'image sub title',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光, 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！',
        featured: true
      }, {
        avatar: require('../assets/defaultAva.jpg'),
        author: 'Myron',
        desc: 'sub title',
        image: require('../assets/004.jpg'),
        imageTitle: 'Breakfast',
        imageSubTitle: 'image sub title',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光, 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！',
        featured: true
      }, {
        avatar: require('../assets/defaultAva.jpg'),
        author: 'Myron',
        desc: 'sub title',
        image: require('../assets/005.jpg'),
        imageTitle: 'Breakfast',
        imageSubTitle: 'image sub title',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光, 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！',
        featured: true
      }, {
        avatar: require('../assets/defaultAva.jpg'),
        author: 'Myron',
        desc: 'sub title',
        image: require('../assets/006.jpg'),
        imageTitle: 'Breakfast',
        imageSubTitle: 'image sub title',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光, 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！',
        featured: true
      }, {
        avatar: require('../assets/defaultAva.jpg'),
        author: 'Myron',
        desc: 'sub title',
        image: require('../assets/007.jpg'),
        imageTitle: 'Breakfast',
        imageSubTitle: 'image sub title',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光, 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！',
        featured: true
      }, {
        avatar: require('../assets/defaultAva.jpg'),
        author: 'Myron',
        desc: 'sub title',
        image: require('../assets/001.jpg'),
        imageTitle: 'Breakfast',
        imageSubTitle: 'image sub title',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光, 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！',
        featured: true
      }]
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      window.alert('tab active')
    }
  }
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
.nav-list>li{
  width: 33%;
  height: 100%;
  font-size: .2rem;
  text-align: center;
  line-height: .55rem;
  background: #2e9e64;
  color: #fff;
  border-right: 3px #fff solid;
}
.nav-list>li:last-child{
  border-right: none;
}
.icon{
  font-size: .38rem;
  color: #fff;
  position: absolute;
  top: 30%;
  right: 5%;
}
.mainCon{
  width: 100%;
  padding: 0 .1rem;
  margin-top: 0.88rem;
  margin-bottom: 1.1rem;
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
