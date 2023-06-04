<template>
  <div class="menu">
    <PageContent :content-config="contentConfig" ref="contentRef" />
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from '@/components/page-content/page-content.vue';
import usePageContent from '@/hooks/usePageContent';
import { onMounted } from 'vue';
import contentConfig from './config/content.config'

const { contentRef, handleResetClick } = usePageContent()
onMounted(() => {
  handleResetClick()
})
</script>

<style scoped>
.menu {}
</style>
