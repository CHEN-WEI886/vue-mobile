<template>
  <van-card
    num="2"
    tag="标签"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    origin-price="10.00"
  />
</template>

<script>
import { Card } from "vant";
export default {
  name: 'card',
  components: {
    [Card.name]: Card,
  },
};
</script>

<style lang="less" scoped>
</style>