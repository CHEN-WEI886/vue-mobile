<template>
  <van-swipe class="my-swipe"
             :autoplay="3000"
             indicator-color="white">
    <van-swipe-item @click="imagePreview">
      <img src="@/assets/u405.png"
           alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/u405.png"
           alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/u405.png"
           alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/u405.png"
           alt="">
    </van-swipe-item>
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
.my-swipe {
  width: 100%;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    img {
      height: 500px;
    }
  }
}
</style>