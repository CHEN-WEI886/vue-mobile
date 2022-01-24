<template>
  <div class="form-title">
    {{title}}
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
  setup() {},
};
</script>

<style lang="less" scoped>
.form-title {
  width: 100%;
  font-size: 32px;
}
</style>