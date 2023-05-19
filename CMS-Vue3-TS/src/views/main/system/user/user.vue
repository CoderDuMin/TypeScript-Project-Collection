<template>
  <div class="user">
    <SearchBar @query="handleQuery" />
    <UserContent />
  </div>
</template>

<script setup lang="ts">
import SearchBar from './cpns/search.vue'
import UserContent from './cpns/content.vue'
import { useSystemStore } from '@/store/modules/system';
import { storeToRefs } from 'pinia';

const systemStore = useSystemStore()
const { userList, userTotal } = storeToRefs(systemStore)

const handleQuery = (query: any) => {
  console.log('查询', query)
  let param = {
    "offset": 0,
    "size": 10,
    name: query.name || ''
  }
  systemStore.getUserListAction(param)
}
</script>

<style lang="scss" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;

}
</style>
