<template>
  <div class="department">
    <PageSearch :search-config="searchConfig" @query-click="handleQuery" @reset-click="handleReset" />
    <PageContent ref="contentRef" />
  </div>
</template>

<script setup lang="ts" >
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from './cpns/page-content.vue'
import searchConfig from './config/search.config';
import { onMounted, ref } from 'vue';

const contentRef = ref<InstanceType<typeof PageContent>>()

const handleQuery = (searchForm: any) => {
  contentRef.value?.queryPage(searchForm)
}
const handleReset = () => {
  contentRef.value?.queryPage({})
}

onMounted(() => {
  contentRef.value?.queryPage({})
})

</script>

<style scoped>
.department {}
</style>
