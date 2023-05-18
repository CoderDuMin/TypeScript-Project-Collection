<template>
  <div class="user">
    <SearchBar @query="handleQuery" />
    <UserContent />
  </div>
</template>

<script setup lang="ts">
import SearchBar from './cpns/search.vue'
import UserContent from './cpns/content.vue'
import { queryUserList } from '@/service/modules/system/user/index'

const handleQuery = (query: any) => {
  console.log('查询', query)
  queryUserList({
    "offset": 0,
    "size": 10,
    ...query
  }).then(res => {
    console.log('结果', res.data)
  })
}
</script>

<style lang="scss" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;

}
</style>
