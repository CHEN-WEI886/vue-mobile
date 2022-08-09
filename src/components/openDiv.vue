<template>
  <div class="rules"
       :class="!isOpen ? 'rules-close' : ''">
    <slot></slot>
    <div class="arrow arrow-up"
         v-if="isOpen"
         @click="changeHeight">
      <van-icon name="arrow-up"
                class="up"
                color="#fff" />
    </div>
    <div class="arrow"
         v-else
         @click="changeHeight">
      <van-icon name="arrow-down"
                color="#fff" />
    </div>
    <div class="overSide"
         v-if="!isOpen"></div>
  </div>
</template>

<script>
import { Icon } from 'vant';
import { ref } from 'vue'

export default {
  components: {
    [Icon.name]: Icon
  },
  setup() {
    const isOpen = ref(false)
    const changeHeight = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      changeHeight
    }
  }
}
</script>

<style lang="less" scoped>
.rules {
  margin-top: 30px;
  position: relative;
  .arrow {
    position: absolute;
    bottom: 0;
    right: 10px;
    background-color: #cccccc;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    z-index: 11;
  }
  .arrow-up {
    .up {
      position: relative;
      bottom: 3px;
    }
  }
  .overSide {
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background-image: linear-gradient(180deg, transparent, #ffffff);
    z-index: 10;
  }
}
.rules-close {
  position: relative;
  height: 200px;
  overflow: hidden;
}
</style>