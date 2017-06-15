<template>
  <div class="dialogWrapper" v-if='isShow'>
    <div class="dialogCon">
      <h3 class="dialogTitle">{{title}}</h3>
      <div class="dialogBody">{{content}}</div>
      <div class="dialogAction">
        <button type="button" @click="close">取消</button>
        <button type="button">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Tip',
      content: '也许你很想留下评论，但终究那是别人的风景。'
    }
  },
  methods: {
    close (){
      this.$store.commit('toggleDialog',false);
    }
  },
  computed: {
    isShow: function(){
      return this.$store.state.isOpen;
    }
  }
}
</script>

<style>
.dialogWrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0,0,0,0.5);
}
.dialogCon{
  width: 75%;
  padding: 0;
  background-color: #fff;
  border-radius: .2rem;
  font-size: .26rem;
  box-shadow: 0 19px 60px rgba(0,0,0,.298039), 0 15px 20px rgba(0,0,0,.219608);

}
.dialogTitle{
  font-size: .3rem;
  padding: .2rem;
}
.dialogBody{
  font-size: .2rem;
  padding: .2rem;
  padding-top: 0;
  color: rgba(0,0,0,0.6);
}
.dialogAction{
  padding: .2rem;
  padding-top: 0;
  text-align: right;
}
.dialogAction button{
  border: 0;
  width: .8rem;
  height: .3rem;
  border-radius: .1rem;
  background: transparent;
  font-size: .2rem;
  color: #7e57c2;
}
</style>
