<template>
  <div class="hotel-list">
    <form-title title="房间列表"></form-title>
    <van-pull-refresh v-model="state.refreshing"
                      @refresh="onRefresh">
      <van-list v-model:loading="state.loading"
                :finished="state.finished"
                finished-text="没有更多了"
                @load="onLoad">
        <v-card v-for="(item, index) in 10"
                :key="index"
                @click="goDetail(index)"></v-card>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import vCard from "@/components/card.vue";
import { useRouter } from "vue-router";
import { List, PullRefresh } from "vant";

import { reactive } from "vue";
export default {
  components: {
    vCard,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
  },
  setup() {
    // const route = useRoute()
    const router = useRouter()
    const state = reactive({
      loading: false,
      finished: true,
      refreshing: false,
      // reactive vue3新api，响应式对象取代vue2的 Object.defineProperty()
      title: "标题",
    });
    const onLoad = () => { };
    const onRefresh = () => { };
    const goDetail = (index) => {
      router.push({ name: 'hotelDetail', query: { id: index } })
    };
    return {
      state,
      onLoad,
      goDetail,
      onRefresh,
    };
  },
};
</script>

<style lang="less" scoped>
.hotel-list {
  padding: 24px;
  padding-top: 0;
  .hotel-item {
    .img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>