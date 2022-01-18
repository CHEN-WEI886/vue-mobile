<template>
  <div class="hotel-list">
    <div class="hotel-item">
      <div class="img">
        <img class="img" src="@/assets/logo.png" alt="">
      </div>
      <div class="infor">
        <div class="title">标题</div>
      </div>
    </div>
  </div>
  <nav-tabber></nav-tabber>
</template>

<script>
import navTabber from "@/components/tabber.vue";
import {reactive, ref} from 'vue'
export default {
  components: {
    navTabber,
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