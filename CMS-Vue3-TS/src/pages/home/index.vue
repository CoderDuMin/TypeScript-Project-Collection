<template>
  <div class="home">
    home
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button type="primary" @click="handleLogout">退出登录</el-button>

    </el-row>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { localCache } from '@/utils/cache';
import { ElButton } from 'element-plus'

const handleLogout = () => {
  localCache.clear()
  router.push('/login')
}
</script>

<style scoped lang="scss">
.home {}
</style>
