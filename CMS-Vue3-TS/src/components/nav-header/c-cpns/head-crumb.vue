<template>
  <div class="head-crumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ curMenu?.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/modules/login';
import { mapPathToMenu } from '@/utils/map-menus';
import { ArrowRight } from '@element-plus/icons-vue'
import { watch, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const loginStore = useLoginStore()
// 3.ElMenu的默认菜单
const route = useRoute()
const curMenu = ref()
watch(() => route.path, () => {
  curMenu.value = mapPathToMenu(route.path, loginStore.userMenus)
})

watchEffect(() => {
  curMenu.value = mapPathToMenu(route.path, loginStore.userMenus)
})

</script>

<style scoped lang="scss">
.head-crumb {}
</style>
