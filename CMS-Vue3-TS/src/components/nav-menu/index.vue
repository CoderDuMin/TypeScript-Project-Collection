<template>
  <div class="nav-menu">
    <!-- 1.logo -->
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 class="title">后台管理系统</h2>
    </div>
    <!-- 2.menu -->
    <div class="menu">
      <el-menu text-color="#b7bdc3" active-text-color="#fff" background-color="#001529">
        <template v-for="item in loginStore.userMenu" :key="item.id">
          <el-sub-menu :index="item.id">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="cMenu in item.children" :key="cMenu.id">
              <el-menu-item :index="cMenu.id">{{ cMenu.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/modules/login';

const loginStore = useLoginStore()
console.log(loginStore.userMenu)
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }

  .el-menu {
    border-right: none;
    user-select: none;
  }

  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }

    .el-menu-item:hover {
      color: #fff;
    }

    .el-menu-item.is-active {
      background-color: #0a60bd;
    }
  }
}
</style>
