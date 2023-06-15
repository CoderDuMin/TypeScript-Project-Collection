<template>
  <div class="base-echart">
    <div ref="echartRef" :style="`height:${height};`"></div>
  </div>
</template>

<script setup lang="ts">
import * as Echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';

interface IProps {
  option: any,
  height: string
}
let instance: any = null
const props = withDefaults(defineProps<IProps>(), {
  option: {
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
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  },
  height: '300px'
})

const echartRef = ref()

const resizeHook = () => {
  console.log('resize')
  instance?.resize()
}

onMounted(() => {
  instance = Echarts.init(echartRef.value, 'light')
  window.addEventListener('resize', resizeHook)
  watchEffect(() => {
    instance.setOption(props.option)
  })
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeHook)
})


</script>

<style scoped lang="scss">
.base-echart {}
</style>
