<template>
  <div class="app-main">
    <el-container class="main-content">
      <el-aside width="200px">
        <NavMenu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu/index.vue'
</script>

<style scoped lang="scss">
.app-main {
  width: 100%;
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    height: 100%;
    // background-color: #e0e0e0;
    background-color: #001529;
  }

  .el-header {
    background: sandybrown;
  }
}
</style>
