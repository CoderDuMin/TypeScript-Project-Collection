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
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        // 内半径/外半径的大小
        radius: [10, 160],
        // 设置区域的位置
        center: ['50%', '50%'],
        bottom: '-15%',
        roseType: 'area', // 圆心角一样, 通过半径的不同表示大小
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        label: {
          show: false
        }
      }
    ]
  }
})
</script>

<style scoped lang="scss">
.bar-echart {}
</style>
