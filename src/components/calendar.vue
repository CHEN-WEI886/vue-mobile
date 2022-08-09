<template>
  <div>
    <van-calendar v-model:show="state.show"
                  type="range"
                  @confirm="onConfirm" />
  </div>
</template>

<script>
import { reactive } from "vue";
import { Calendar } from "vant";

export default {
  components: {
    [Calendar.name]: Calendar,
  },
  props: {
    date: {
      type: String,
      defalut: ''
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      show: false,
      date: ''
    })
    const openCalendar = () => {
      state.show = true
    }
    const formatDate = (date) => `${date.getMonth() + 1}月${date.getDate()}日`;
    const getDay = (startDay, endDay) => {
      //date1：开始日期，date2结束日期
      let a1 = Date.parse(new Date(startDay));
      let a2 = Date.parse(new Date(endDay));
      let day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24));//核心：时间戳相减，然后除以天数
      return day
    }
    const onConfirm = (values) => {
      const [start, end] = values;
      console.log(start, end, 'values');
      const day = getDay(start, end)
      state.show = false;
      emit('update:date', { startDate: formatDate(start), endtDate: formatDate(end), day: day })
    };
    return { state, onConfirm, openCalendar }
  }
};
</script>

<style lang="less" scoped>
</style>