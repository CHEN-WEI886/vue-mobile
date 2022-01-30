<template>
  <div class="app-container">
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: 'App',
  components: {

  },
  setup() {
    const route = useRoute()
    console.log(route)
    return { route }
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
.slide-left-enter {
  transform: translate(100%, 0);
}
.slide-left-leave-active {
  transform: translate(-50%, 0);
}
.slide-right-enter {
  transform: translate(-50%, 0);
}
.slide-right-leave-active {
  transform: translate(100%, 0);
}
.center {
  position: absolute;
  top: 100px;
  bottom: 100px;
  left: 0;
  right: 0;
  overflow-y: scroll;
  background-color: #edf0f4;
  padding: 24px;
}
.center > div {
  border-radius: 10px;
}
.br10 {
  border-radius: 10px;
}
</style>
