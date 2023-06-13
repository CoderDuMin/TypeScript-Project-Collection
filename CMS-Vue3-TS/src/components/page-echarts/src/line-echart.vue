<template>
  <div class="line-echart">
    <baseEchart :option="option" />
  </div>
</template>

<script setup lang="ts">
import baseEchart from './base-echart.vue';
const option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
};
</script>

<style scoped lang="scss">
.line-echart {}
</style>
