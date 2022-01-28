<template>
  <div class="app-container">
    <transition :name="'slide-right'|| 'fade'">
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
    return {route}
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
.center{
  position: absolute;
  top: 100px;
  bottom: 100px;
  left: 0;
  right: 0;
  overflow-y: scroll;
  background-color: #EDF0F4;
  padding: 24px;
}
.center > div{
  border-radius: 10px;
}
.br10{
  border-radius: 10px;

}
</style>
