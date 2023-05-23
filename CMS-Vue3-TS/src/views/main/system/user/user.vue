<template>
  <div class="user">
    <SearchBar @query="handleQuery" />
    <UserContent ref="contentRef" />
  </div>
</template>

<script setup lang="ts">
import SearchBar from './cpns/search.vue'
import UserContent from './cpns/content.vue'
import { useSystemStore } from '@/store/modules/system';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const systemStore = useSystemStore()
const { userList, userTotal } = storeToRefs(systemStore)

const contentRef = ref<InstanceType<typeof UserContent>>()

const handleQuery = (query: any) => {
  console.log('查询', query)
  contentRef.value!.queryUser(query)
}
</script>

<style lang="scss" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;

}
</style>
