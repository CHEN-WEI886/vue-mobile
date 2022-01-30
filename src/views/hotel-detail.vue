<template>
  <div>
    <v-header title="房间详情"></v-header>
    <div class="center">
      <v-swiper></v-swiper>
      <div></div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import swiper from '@/components/swiper.vue';
export default {
  components: {
    vSwiper: swiper
  },
  setup() {
    const state = reactive({

    })
    return {
      state
    }
  }
}
</script>

<style lang="less" scoped>
</style>