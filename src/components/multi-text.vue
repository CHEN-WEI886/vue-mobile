<template>
  <div class="rules-item">
    <span>{{lable}}</span>
    <div class="rules-content"
         :class="arrow === 'right' ? 'rules-arrow' : ''">
      {{context}}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lable: {
      type: String,
      default: 'label'
    },
    context: {
      type: String,
      default: 'context'
    },
    arrow: {
      type: String,
      default: 'left'
    },
  }
}
</script>

<style lang="less" scoped>
.rules-item {
  display: flex;
  margin-bottom: 24px;
  span {
    width: 180px;
    color: #aaaaaa;
  }
  .rules-content {
    flex: 1;
  }
  .rules-arrow {
    text-align: right;
  }
}
</style>