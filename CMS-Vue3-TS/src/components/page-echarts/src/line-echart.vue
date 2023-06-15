<template>
  <div class="line-echart">
    <baseEchart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import baseEchart from './base-echart.vue';
const props = defineProps<{
  labels: string[],
  values: any[]
}>()
const option = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.labels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.values,
        type: 'line',
        areaStyle: {}
      }
    ]
  };
})
</script>

<style scoped lang="scss">
.line-echart {}
</style>
