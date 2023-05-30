<template>
  <div class="role">
    <PageSearch :search-config="searchConfig" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config';
</script>

<style lang="scss" scoped>
.role {
  color: red;
}
</style>
