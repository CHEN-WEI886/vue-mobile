<template>
  <v-header title="首页" :isBack="false"></v-header>
  <div class="hotel-list center">
    <form-title title="房间列表"></form-title>
    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <v-card v-for="(item, index) in 10" :key="index"></v-card>
      </van-list>
    </van-pull-refresh>
  </div>
  <nav-tabber></nav-tabber>
</template>

<script>
import navTabber from "@/components/tabber.vue";
import vHeader from "@/components/header.vue";
import vCard from "@/components/card.vue";
import { List, PullRefresh  } from "vant";

import { reactive } from "vue";
export default {
  components: {
    navTabber,
    vHeader,
    vCard,
    [List.name]:List,
    [PullRefresh.name]:PullRefresh
  },
  setup() {
    const state = reactive({
      loading:false,
      finished:false,
      refreshing:false,
      // reactive vue3新api，响应式对象取代vue2的 Object.defineProperty()
      title: "标题",
    });
    const onLoad = (()=>{
      
    })
    const onRefresh = (()=>{})
    return {
      state,
      onLoad,
      onRefresh,
    };
  },
};
</script>

<style lang="less" scoped>
.hotel-list {
  .hotel-item {
    .img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>