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
    title: {
      // text: 'Referer of a Website',
      // subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
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
