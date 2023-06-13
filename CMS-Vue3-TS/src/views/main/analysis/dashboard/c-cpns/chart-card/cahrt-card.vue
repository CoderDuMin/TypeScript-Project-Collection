<template>
  <div class="chart-card">
    <el-card class="box-card" :header="title">
      <slot>
        <div>我是默认内容</div>
      </slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
}
withDefaults(defineProps<IProps>(), {
  title: '默认标题'
})
</script>

<style scoped lang="scss">
.chart-card {}
</style>
