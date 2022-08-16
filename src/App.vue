<template>
  <div class="app-container">
    <v-header :title="title"
              :isBack="isBack"></v-header>
    <Transition>
      <router-view class="center"
                   :class="!state.isTabber ? 'padding0 ': ''"></router-view>
    </Transition>
    <nav-tabber v-if="state.isTabber"></nav-tabber>
  </div>
</template>

<script>
import navTabber from "@/components/tabber.vue";

import { useRoute } from 'vue-router'
import { reactive, computed, watch } from 'vue'
export default {
  name: 'App',
  components: {
    navTabber,
  },
  setup() {
    const route = useRoute()
    const state = reactive({
      isTabber: false
    })
    const title = computed(() => {
      return route.meta.title
    })
    const isBack = computed(() => {
      return route.meta.isBack || false
    })
    // 监听路由变化，是否显示底部导航栏
    watch(() => route.name, (nval) => {
      if (nval) {
        state.isTabber = route.meta.isTabber
      }
    })
    return { route, state, title, isBack }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.center {
  position: absolute;
  top: 100px;
  bottom: 100px;
  left: 0;
  right: 0;
  overflow-y: scroll;
  background-color: #edf0f4;
  padding-top: 0;
}
.padding0 {
  bottom: 0px;
}
.center > div {
  border-radius: 10px;
}
.br10 {
  border-radius: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
