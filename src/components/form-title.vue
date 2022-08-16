<template>
  <div class="form-title">
    <span>——</span> <span class="title-style"> {{title}} </span> <span>——</span>
  </div>
</template>

<script>
export default {
  name: 'formTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() { },
};
</script>

<style lang="less" scoped>
.form-title {
  width: 100%;
  margin: 20px 0;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  span {
    margin-right: 20px;
  }
  .title-style {
    font-size: 34px;
    font-weight: 600;
  }
}
</style>