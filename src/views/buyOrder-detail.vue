<template>
  <div class="detail">
    <div>
      <div class="infor inforAndCalendar">
        <div class="calendar"
             v-if="JSON.stringify(dateObj) === '{}' "
             @click="openCalendar">
          <div class="label">
            入住时间：
          </div>选择日期
        </div>
        <div class="calendar"
             v-else
             @click="openCalendar">
          <div class="label">
            入住时间：
          </div>
          <div class="day">{{dateObj.startDate}}</div>
          <span>—</span>
          <div class="dayNumber">{{dateObj.day}}晚</div>
          <span>—</span>
          <div class="day">{{dateObj.endtDate}}</div>

        </div>
        <div class="title">高级大床房 203</div>
        <div class="noCancel"><img src="@/assets/no.png"
               alt="">不可取消</div>
        <div class="speed"><img src="@/assets/shandian.png"
               alt="">可快速确认订单</div>
        <div class="infor-item">
          <div class="item">1张特大床房2米</div>
          <div class="item">55-65 m^2</div>
          <div class="item">2-3层</div>
          <div class="item">有窗</div>
          <div class="item">wifi免费</div>
          <div class="item">2人</div>
        </div>
      </div>

      <div class="infor">
        <v-OpenDiv>
          <multi-text lable='费用政策'
                      context='停车场：有免费停车场'>
          </multi-text>
          <multi-text lable='费用政策'
                      context='遮光窗帘，书桌，床具：毯子或被子，衣柜/衣橱，空调免费，WiFi免费，衣架，休闲椅'>
          </multi-text>
          <multi-text lable='浴室配套'
                      context='独立卫生间，24小时热水，电热水器，独立淋浴间，吹风机，拖鞋，浴巾，浴室化妆放大镜、卫生纸'>
          </multi-text>
          <multi-text lable='食品饮品'
                      context='免费，电热水壶，茶壶，茶包'>
          </multi-text>
          <multi-text lable='洗漱用品'
                      context='牙刷，牙膏，洗发水，沐浴露，护发素，浴帽，香皂，梳子、剃须刀，毛巾'>
          </multi-text>
          <multi-text lable='其他设备'
                      context='输入密码锁进门'>
          </multi-text>
        </v-OpenDiv>
      </div>
      <div class="infor rules">
        <div class="rules">
          <multi-text lable='在线支付'
                      arrow='right'
                      context='1间2晚 共 '>
            <span class="price">￥1435</span>
          </multi-text>
        </div>
      </div>
      <div class="infor rules">
        <div class="noCancel">
          <van-icon name="warning"
                    size=".9rem"
                    style="margin-right:3px" />订房必看
        </div>
        <div class="rules">
          <multi-text lable='退款规则'
                      context='预订成功后不可取消/变更，如未入住，商家将扣除全额房费'>
          </multi-text>
          <multi-text lable='预订说明'
                      context='预定后，凭房间密码入住，入住后请前往前台进行登记。'>
          </multi-text>
          <multi-text lable='温馨提示'
                      context='1、防疫期间，提供正常健康码、行程码即可入住，请在下单前与商家确认接待方式，以免影响您的入住。'>
          </multi-text>
          <multi-text lable='温馨提示'
                      context='入住时间15:00以后，离店时间12:00以前'>
          </multi-text>
        </div>
      </div>
      <div class="order-Tabber">
        <div class="price">￥190</div>
        <div class="order-button"
             @click="sure">提交订单</div>
      </div>
    </div>
    <!-- 如果是组件使用双向绑定就不能用 reactive 里面的 要用ref单独定义 -->
    <vCalendar ref='calendar'
               v-model:date="dateObj"></vCalendar>
  </div>
</template>

<script>
import { Icon } from 'vant';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import calendar from '@/components/calendar.vue';
import openDiv from '@/components/openDiv.vue';
import multiText from '@/components/multi-text.vue';
export default {
  components: {
    vCalendar: calendar,
    [Icon.name]: Icon,
    vOpenDiv: openDiv,
    'multi-text': multiText
  },
  setup() {
    const state = reactive({
    })
    const route = useRouter()
    const sure = () => {
      route.push({ name: 'purchase' })
    }
    const dateObj = ref({})
    const calendar = ref(null);
    const openCalendar = () => {
      calendar.value.openCalendar()
    }

    return {
      state,
      openCalendar,
      calendar,
      sure,
      dateObj,
    }
  }
}
</script>

<style lang="less" scoped>
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
    border-radius: 20px;
    margin-bottom: 24px;
    .title {
      font-size: 38px;
      color: #000;
      font-weight: 600;
      text-align: left;
    }
    .noCancel {
      display: inline-flex;
      align-items: center;
      color: #f7250a;
      font-size: 20px;
      margin-top: 10px;
      img {
        width: 26px;
        height: 26px;
      }
    }
    .speed {
      display: inline-flex;
      align-items: center;
      margin-left: 20px;
      color: #13227a;
      margin-top: 10px;
      img {
        width: 28px;
      }
    }
    .infor-item {
      display: flex;
      flex-wrap: wrap;
      .item {
        font-size: 24px;
        color: #aaaaaa;
        margin-left: 70px;
        width: 220px;
        text-align: left;
        margin-top: 24px;
      }
      .item:nth-of-type(2n + 1) {
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
        .price {
          color: #f82e2e;
          font-weight: 600;
        }
      }
    }
  }
  .inforAndCalendar {
    .calendar {
      display: flex;
      align-items: center;
      color: #000;
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 40px;
      border-block-end: dashed #e0e0e0 2px;
      padding-bottom: 24px;
      .label {
        font-size: 26px;
        color: #aaaaaa;
      }
      .dayNumber {
        border-radius: 20px;
        padding: 2px 5px;
        border: solid #f82e2e 1px;
        color: #f82e2e;
        font-size: 26px;
        font-weight: 600;
      }
      .day {
        font-weight: 600;
        font-size: 40px;
      }
      span:nth-of-type(1) {
        margin-right: 10px;
        margin-left: 10px;
      }
      span:nth-of-type(2) {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }

  .order-Tabber {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 100px;
    padding: 0 40px;
    justify-content: space-between;
    align-items: center;
    .price {
      color: red;
      font-size: 46px;
      font-weight: 600;
    }
    .order-button {
      width: 200px;
      text-align: center;
      height: 70px;
      line-height: 70px;
      border-radius: 40px;
      background-color: #4e4e4e;
      color: #fff;
    }
  }
}
</style>