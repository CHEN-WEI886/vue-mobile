<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {reactive,toRefs } from "vue";
import { Tabbar, TabbarItem } from "vant";

export default {
  components: {
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem
  },
  setup(){
    const state = reactive({
    })
    return{
      ...toRefs(state)
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .van-tabbar{
  height: 100px;
  .van-tabbar-item__icon{
    font-size: 44px;
  }
  .van-tabbar-item__text{
    font-size: 24px;
  }
}
</style>