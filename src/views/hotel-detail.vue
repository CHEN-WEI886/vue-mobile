<template>
  <div class="detail">
    <div>
      <v-swiper></v-swiper>
      <div class="infor">
        <div class="title">高级大床房 203</div>
        <div class="infor-item">
          <div class="item">1张特大床房2米</div>
          <div class="item">55-65 m^2</div>
          <div class="item">2-3层</div>
          <div class="item">有窗</div>
          <div class="item">wifi免费</div>
          <div class="item">2人</div>
        </div>
        <div class="rules">
          <div class="rules-item">
            <span>费用政策</span>
            <div class="rules-content">停车场：有免费停车场</div>
          </div>
          <div class="rules-item">
            <span>费用政策</span>
            <div class="rules-content">遮光窗帘，书桌，床具：毯子或被子，衣柜/衣橱，空调免费，WiFi免费，衣架，休闲椅</div>
          </div>
          <div class="rules-item">
            <span>浴室配套</span>
            <div class="rules-content">独立卫生间，24小时热水，电热水器，独立淋浴间，吹风机，拖鞋，浴巾，浴室化妆放大镜、卫生纸</div>
          </div>
          <div class="rules-item">
            <span>食品饮品</span>
            <div class="rules-content">免费，电热水壶，茶壶，茶包</div>
          </div>
          <div class="rules-item">
            <span>洗漱用品</span>
            <div class="rules-content">牙刷，牙膏，洗发水，沐浴露，护发素，浴帽，香皂，梳子、剃须刀，毛巾</div>
          </div>
          <div class="rules-item">
            <span>其他设备</span>
            <div class="rules-content">输入密码锁进门</div>
          </div>
        </div>
      </div>
      <vActionBar @sure='sure'
                  text='立即订购'></vActionBar>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from "vue-router";
import swiper from '@/components/swiper.vue';
import actionBar from '@/components/actionBar.vue';
export default {
  components: {
    vSwiper: swiper,
    vActionBar: actionBar,
  },
  setup() {
    const state = reactive({

    })
    const router = useRouter()
    const sure = () => {
      router.push({ name: 'buyOrderDetail' })
    }
    return {
      state,
      sure
    }
  }
}
</script>

<style lang="less" scoped>
// @import "~@/assets/base/init.css";
.detail {
  margin-bottom: 110px;
  div {
    text-align: left;
    font-size: 28px;
    color: #000;
  }
  .infor {
    background-color: #fff;
    padding: 24px;
    margin: 24px;
    margin-top: -70px;
    position: relative;
    z-index: 99;
    border-radius: 20px;
    .title {
      font-size: 38px;
      color: #000;
      font-weight: 600;
      text-align: left;
    }
    .infor-item {
      display: flex;
      flex-wrap: wrap;
      .item {
        font-size: 24px;
        color: #000;
        margin-left: 20px;
        width: 220px;
        text-align: left;
        margin-top: 24px;
      }
      .item:nth-of-type(3n + 1) {
        margin-left: 0;
      }
    }
    .rules {
      margin-top: 30px;
      .rules-item {
        display: flex;
        margin-bottom: 24px;
        span {
          width: 180px;
          color: #aaaaaa;
        }
        .rules-content {
          flex: 1;
        }
      }
    }
  }
}
</style>