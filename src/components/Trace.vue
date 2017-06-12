<template>
<div>
  <div class="head-nav">
    <div class="navLeft">
      <i class="iconfont icon-category"></i>
    </div>
    <div class="navCenter">
      <i class="iconfont icon-calendar"></i>
    </div>
    <div class="navRight">
      <i class="iconfont icon-edit"></i>
    </div>
  </div>
  <div class="mainCon">
    <div class="cus-cardList" v-for="item in list">
      <div class="cusDateBar" v-bind:class="{barHeader:item.isHeader}">
        <div class="date-icon"><em v-if="item.isHeader"></em></div>
        <div class="date-num" v-if="item.isHeader">{{item.date}}</div>
      </div>
      <div class="cus-card" v-bind:style="{backgroundImage: 'url('+item.coverImg+')'}">
        <div class="card-text">
          <div class="card-text-title">{{item.title}}</div>
          <div class="card-text-content">{{item.content}}</div>
        </div>
        <div class="card-action">
          <i class='iconfont icon-map'></i>
          <div class="postion">{{item.position}}</div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      msg: true,
      list: [{
        coverImg: require('../assets/010.jpg'),
        title: '雾灵山游记',
        content: '山泉人家，源自山泉。地处雾灵湖畔、雾灵山中，清新经营逾十年，只为分享给你清新的空气，纯净的泉水，秀丽的山色美景。',
        position: '北京市密云雾灵西峰风景区',
        date: '2017.06.08',
        isHeader: true
      },
      {
        coverImg: require('../assets/011.jpg'),
        title: '十渡之旅',
        content: '十渡风景区位于北京市房山区西南，是中国北方唯一一处大规模喀斯特岩溶地貌。房山世界地质公园共有八个园区，其中十渡为八个园区的核心园区——十渡园区。',
        position: '北京市房山区西南十渡风景区',
        date: '2017.05.10',
        isHeader: false
      }]
    }
  }
}
</script>

<style scoped>
.head-nav{
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  background: #2e9e64;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
.head-nav>div{
  height: 100%;
  line-height: .6rem;
  padding: 0 .3rem;
}
.head-nav i{
  font-size: .36rem;
  color: #fff;
}
.mainCon{
  width: 100%;
  height: 100%;
  margin-top: 0.88rem;
  margin-bottom: 1rem;
  padding: 0 .1rem;
  box-sizing: border-box;
}
.cusDateBar{
  width: 100%;
  height: .2rem;
  position: relative;
}
.barHeader{
  height: .5rem;
}
.date-icon{
  display: inline-block;
  width: .05rem;
  height: 100%;
  background: #eee;
  position: absolute;
  left: 2%;
  top: 0;
}
.date-icon em{
  display: inline-block;
  width: .1rem;
  height: .1rem;
  border-radius: 5px;
  background: #009688;
  position: absolute;
  left: -35%;
  top: 50%;
}
.date-num{
  display: inline-block;
  font-size: .26rem;
  font-weight: 600;
  line-height: .6rem;
  position: absolute;
  left: 5%;
  top: 0;
}
.cus-card{
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  position: relative;
  overflow: hidden;
}
.card-text{
  width: 100%;
  height: 3rem;
  display: flex;
 /* justify-content: center;*/
  align-items: center;
  flex-direction: column;
  background: rgba(0,0,0,0.4);
  color: #fff;
}
.card-text-title{
  font-size: .3rem;
  margin-top: 5%;
}
.card-text-content{
  width: 50%;
  height: 40%;
  display: inline-block;
  font-size: .18rem;
  margin-top: .5rem;
  overflow: hidden;
}
.card-cover img{
  width: 100%;
  height: 100%
}
.card-action{
  position: absolute;
  color: #fff;
  bottom: 5%;
  right: 5%;
  font-size: .14rem;
}
.card-action .postion{
  height: 100%;
  display: inline-block;
}
</style>
