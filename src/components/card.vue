<template>
  <van-card
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    class="card"
  >
    <template #tags>
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </template>
  </van-card>
</template>

<script>
import { Card } from "vant";
export default {
  name: "card",
  components: {
    [Card.name]: Card,
  },
};
</script>

<style lang="less" scoped>
.card {
  background: #fff;
}
/deep/ .van-card__content {
  padding-left: 20px;
  div{
    text-align: left;
  }
  .van-card__title{
    font-size: 32px;
    line-height: normal;
  }
  .van-card__desc{
    font-size: 26px;
  }
}
</style>