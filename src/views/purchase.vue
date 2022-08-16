<template>
  <div>
    <div class="infor">
      <div class="price">
        ￥ <span>1435</span>
      </div>
      <div class="countDown">
        <span>支付剩余时间：</span>
        <van-count-down :time="time"
                        style="color:#f7250a" />
      </div>
    </div>
    <div class="br10 mt16 cellList">
      <van-cell-group>
        <van-cell is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="cell-item">
              <img src="@/assets/weixin.png"
                   alt="">
              <span class="custom-title">微信支付</span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, CountDown } from "vant";
import { ref } from 'vue';
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [CountDown.name]: CountDown,
  },
  setup() {
    const time = ref(30 * 60 * 60 * 1000);
    return { time };
  },
};
</script>

<style lang="less" scoped>
.user {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding-left: 24px;
  .avide {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
}
.infor {
  .price {
    color: #aaa;
    margin-bottom: 10px;
    span {
      font-size: 60px;
      margin-left: -10px;
      color: black;
    }
  }
  .countDown {
    display: flex;
    justify-content: center;
    font-size: 26px;
  }
}
/deep/ .van-cell__title {
  text-align: left;
}
.cellList {
  overflow: hidden;
  .cell-item {
    display: flex;
    align-items: center;
    img {
      width: 46px;
      margin-right: 10px;
      margin-top: -6px;
    }
  }
}
</style>