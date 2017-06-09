<template>
<div>
  <mu-appbar title="">
    <mu-icon-button icon="menu" slot="left"/>
    <mu-flat-button label="expand_more" slot="right"/>
    <mu-flat-button href="333" label="expand_more" slot="right"/>
    <mu-flat-button label="全部" icon="expand_more" slot="right"/>
  </mu-appbar>
  <div class="mainCon">
    <mu-card v-for="item in list">
      <mu-card-header title="Myron Avatar" subTitle="sub title">
        <mu-avatar :src="item.avatar" slot="avatar"/>
      </mu-card-header>
      <mu-card-media :title="item.title" subTitle="Image Sub Title">
        <img :src="item.image" />
      </mu-card-media>
      <mu-card-title title="Content Title" subTitle="Content Title"/>
      <mu-card-text>
        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
        找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="Action 1"/>
        <mu-flat-button label="Action 2"/>
      </mu-card-actions>
    </mu-card>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [{
        image: require('../assets/001.jpg'),
        avatar: require('../assets/defaultAva.jpg'),
        title: 'Breakfast',
        author: 'Myron',
        featured: true
      }, {
        image: require('../assets/002.jpg'),
        avatar: require('../assets/defaultAva.jpg'),
        title: 'Burger',
        author: 'Linyu',
        featured: true
      }, {
        image: require('../assets/003.jpg'),
        avatar: require('../assets/defaultAva.jpg'),
        title: 'Camera',
        author: 'ruolin',
        featured: true
      }, {
        image: require('../assets/004.jpg'),
        avatar: require('../assets/defaultAva.jpg'),
        title: 'Hats',
        author: 'kakali',
        featured: true
      }, {
        image: require('../assets/005.jpg'),
        avatar: require('../assets/defaultAva.jpg'),
        title: 'Honey',
        author: 'yuyang',
        featured: true
      }, {
        image: require('../assets/006.jpg'),
        avatar: require('../assets/defaultAva.jpg'),
        title: 'Morning',
        author: 'mokayi',
        featured: true
      }, {
        image: require('../assets/007.jpg'),
        avatar: require('../assets/defaultAva.jpg'),
        title: 'Vegetables',
        author: 'NUyyyyyyy',
        featured: true
      }, {
        image: require('../assets/008.jpg'),
        avatar: require('../assets/defaultAva.jpg'),
        title: 'water',
        author: 'TDDyyyyyyy',
        featured: true
      }]
    }
  }
}
</script>

<style scoped>
.mainCon{
  width: 100%;
  height: 100%;
  margin-top: 64px;
  margin-bottom: 60px;
  padding: 10px;
}
.mu-card{
  margin: 10px 0;
}
.mu-appbar{
  position: fixed;
  top: 0;
  left: 0;
}
</style>
