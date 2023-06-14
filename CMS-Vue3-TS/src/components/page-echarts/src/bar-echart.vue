<template>
  <div class="bar-echart">
    <baseEchart :option="options" />
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import { computed } from 'vue';
import baseEchart from './base-echart.vue';
const props = defineProps<{
  labels: string[]
  values: string[]
}>()
const options = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      data: props.values
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };
})

</script>

<style scoped lang="scss">
.bar-echart {}
</style>
