<script setup lang="ts">
import useCounterStore from '@/store/modules/counter'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const countStore = useCounterStore()

const changeCount = () => {
  countStore.changeCountAction(999)
}
</script>

<template>
  <div style="height: 100%;width: 100%;">
    <el-config-provider :locale="zhCn">
      <RouterView></RouterView>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
