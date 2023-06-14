<template>
  <div class="bar-echart">
    <baseEchart :option="options" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IEchartValueType } from '../types';
import baseEchart from './base-echart.vue';
interface IProps {
  roseData: IEchartValueType[]
}

const props = defineProps<IProps>()
const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '销量',
        type: 'pie',
        radius: [10, 160],
        // 设置区域的位置
        center: ['50%', '50%'],
        bottom: '-15%',
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  };
})
</script>

<style scoped lang="scss">
.bar-echart {}
</style>
