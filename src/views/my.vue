<template>
  <v-header title="个人中心" :isBack="false"></v-header>
  <div class="center">
    <div class="user">
      <img class="avide" src="@/assets/logo.png" alt="" />
      <div class="infor">
        <p>陈炜</p>
      </div>
    </div>
    <div class="br10 mt16 cellList">
      <van-cell-group>
        <van-cell is-link value="待使用订单" />
        <van-cell is-link value="已完成订单" />
      </van-cell-group>
    </div>
  </div>
  <nav-tabber></nav-tabber>
</template>

<script>
import navTabber from "@/components/tabber.vue";
import { Cell, CellGroup } from "vant";
export default {
  components: {
    navTabber,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
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
.cellList{
  overflow: hidden;
}
</style>