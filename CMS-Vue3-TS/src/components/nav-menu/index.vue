<template>
  <div class="nav-menu">
    <!-- 1.logo -->
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 class="title" v-show="!isFold">后台管理系统</h2>
    </div>
    <!-- 2.menu -->
    <div class="menu">
      <el-menu text-color="#b7bdc3" active-text-color="#fff" background-color="#001529" :default-active="defaultActive"
        :collapse="isFold">
        <template v-for="item in loginStore.userMenus" :key="item.id">
          <el-sub-menu :index="item.id">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="cMenu in item.children" :key="cMenu.id">
              <el-menu-item :index="cMenu.id" @click="handleItemClick(cMenu)">{{ cMenu.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/modules/login';
import { mapPathToMenu } from '@/utils/map-menus';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

defineProps({
  isFold: {
    type: Boolean,
    requried: true
  }
})

const loginStore = useLoginStore()
console.log(loginStore.userMenus)

const router = useRouter()
const handleItemClick = (item: any) => {
  router.push(item.url)
}

// 3.ElMenu的默认菜单
const route = useRoute()
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, loginStore.userMenus)
  if (!pathMenu) {
    return ''
  }
  console.log('pathMenu', pathMenu)
  return pathMenu.id
})
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
