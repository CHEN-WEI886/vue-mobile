<template>
  <v-header title='首页' :isBack='false'></v-header>
  <div class="hotel-list center">
    <v-card
    v-for="(item, index) in 10"
    :key="index"
    ></v-card>
  </div>
  <nav-tabber></nav-tabber>
</template>

<script>
import navTabber from "@/components/tabber.vue";
import vHeader from "@/components/header.vue";
import vCard from "@/components/card.vue";
import {reactive, ref} from 'vue'
export default {
  components: {
    navTabber,
    vHeader,
    vCard
  },
  setup() {
    const state = reactive({ // reactive vue3新api，响应式对象取代vue2的 Object.defineProperty()
      title:'标题'
    })
    const value = ref('这是标题2')
    console.log(state)
    console.log(value)
    return{
      state,
      value
    }
  },
};
</script>

<style lang="less" scoped>
.hotel-list{
  .hotel-item{
    .img{
      width: 100px;
      height: 100px;
    }
  }
}
</style>