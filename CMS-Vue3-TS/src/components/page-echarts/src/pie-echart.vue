<template>
  <div class="bar-echart">
    <baseEchart :option="options" />
  </div>
</template>

<script setup lang="ts">
import baseEchart from './base-echart.vue';
import type { IEchartValueType } from '../types'
import { computed } from 'vue';

interface IProps {
  pieData: IEchartValueType[]
}

const props = defineProps<IProps>()
const options = computed(() => {
  return {
    // 手指放上去的时候显示的文本
    tooltip: {
      trigger: 'item'
    },
    // 图例:
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        bottom: '-10%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped lang="scss">
.bar-echart {}
</style>
