<template>
  <div class="app-main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <NavMenu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header>
          <NavHeader :is-fold="isFold" @fold="isFold = !isFold" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from '@/store/modules/main';
import NavMenu from '@/components/nav-menu/index.vue'
import NavHeader from '@/components/nav-header/index.vue'

const isFold = ref(false)

const mainStore = useMainStore()
mainStore.getInitialDataAction()
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
    transition: width 0.3s ease;
  }

  .el-header {
    background: #fff;
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
