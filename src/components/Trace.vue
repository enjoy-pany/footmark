<template>
<div>
  <mu-appbar title="">
    <mu-icon-button icon="menu" slot="left"/>
    <mu-flat-button label="expand_more" slot="right"/>
    <mu-flat-button href="333" label="expand_more" slot="right"/>
    <mu-flat-button label="全部" icon="expand_more" slot="right"/>
  </mu-appbar>
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
          <mu-icon value='location_on' :size='18'></mu-icon>
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
.mu-appbar{
  position: fixed;
  top: 0;
  left: 0;
}

.mainCon{
  width: 100%;
  height: 100%;
  margin-top: 64px;
  margin-bottom: 60px;
  padding: 10px;
}
.cus-cardList{
  position: relative;
}
.cusDateBar{
  width: 100%;
  height: 20px;
}
.barHeader{
  height: 50px;
}
.date-icon{
  display: inline-block;
  width: 5px;
  height: 100%;
  background: #eee;
  position: relative;
  left: 2%;
  top: 0;
}
.date-icon em{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #009688;
  position: absolute;
  left: -35%;
  top: 50%;
}
.date-num{
  display: inline-block;
  font-size: 26px;
  font-weight: 600;
  line-height: 60px;
  position: absolute;
  left: 5%;
  top: 0;
}
.cus-card{
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  position: relative;
  overflow: hidden;
}
.card-text{
  width: 100%;
  height: 400px;
  display: flex;
 /* justify-content: center;*/
  align-items: center;
  flex-direction: column;
  background: rgba(0,0,0,0.4);
  color: #fff;
}
.card-text-title{
  font-size: 34px;
  margin-top: 5%;
}
.card-text-content{
  width: 50%;
  height: 40%;
  display: inline-block;
  font-size: 20px;
  margin-top: 50px;
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
  font-size: 14px;
}
.card-action .postion{
  height: 100%;
  display: inline-block;
}
</style>
