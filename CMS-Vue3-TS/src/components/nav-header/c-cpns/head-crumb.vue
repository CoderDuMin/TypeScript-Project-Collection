<template>
  <div class="head-crumb">
    <el-breadcrumb :separator-icon="ArrowRight">

      <el-breadcrumb-item v-for="(item, index) in curMenu" :key="index" :to="item.path">{{ item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/modules/login';
import { mapPathToBreadcrumbs } from '@/utils/map-menus';
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const loginStore = useLoginStore()
// 3.ElMenu的默认菜单
const route = useRoute()
const curMenu = computed(() => {
  return mapPathToBreadcrumbs(route.path, loginStore.userMenus)
})
console.log('curMenu', curMenu)

</script>

<style scoped lang="scss">
.head-crumb {}
</style>
