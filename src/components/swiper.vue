<template>
  <van-swipe class="my-swipe"
             :autoplay="3000"
             indicator-color="white">
    <van-swipe-item @click="imagePreview">1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem, ImagePreview } from 'vant';
import { reactive, onMounted } from 'vue'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [ImagePreview.name]: ImagePreview,
  },
  setup() {
    const state = reactive({

    })
    onMounted(() => {
    })
    const imagePreview = () => {
      console.log(111);
      ImagePreview({
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
        ],
        startPosition: 1,
        closeable: true,
      });
    }
    return { state, imagePreview }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>