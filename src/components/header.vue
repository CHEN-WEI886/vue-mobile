<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :left-arrow='isBack'
    :fixed='true'
    :safe-area-inset-top='true'
    @click-left="onClickLeft"
  />
</template>

<script>
import { NavBar } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    leftText: {
      type: String,
      default: ''
    },
    isBack: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const onClickLeft = ()=>{

    }
    return{
      onClickLeft
    }
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__content{
  height: 100px;
  background-color: #4F77AA;
  .van-nav-bar__title{
    font-size: 32px;
    color: #fff;
  }
}
</style>