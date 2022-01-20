<template>
  <v-header title='个人中心' :isBack='false'></v-header>
  <div class="center">
    <van-cell-group class="mt16">
      <van-cell is-link value="待使用订单" />
      <van-cell is-link value="已完成订单" />
    </van-cell-group>
  </div>
  <nav-tabber></nav-tabber>
</template>

<script>
import navTabber from "@/components/tabber.vue";
import vHeader from "@/components/header.vue";
import { Cell, CellGroup  } from "vant";
export default {
  components: {
    navTabber,
    vHeader,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup 
  },
};
</script>

<style lang="less" scoped>

</style>