<template>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o"
                         text="客服"
                         @click="onClickIcon" />
    <van-action-bar-button type="danger"
                           :text="props.text"
                           color="#333333"
                           @click="gotoBuy" />
  </van-action-bar>
</template>

<script>
import { reactive } from "vue";
import { ActionBar, ActionBarIcon, ActionBarButton } from "vant";
export default {
  name: "ActionBar",
  components: {
    [ActionBar.name]: ActionBar,
    [ActionBarIcon.name]: ActionBarIcon,
    [ActionBarButton.name]: ActionBarButton,
  },
  props: {
    text: {
      type: String,
      default: '立即购买'
    }
  },
  setup(props, { emit }) {
    const state = reactive({})
    const gotoBuy = () => {
      emit('sure')
    }
    function onClickIcon() {
      console.log('111')
    }
    return {
      onClickIcon,
      state,
      gotoBuy,
      props
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .van-button__text {
  color: #fff;
}
</style>