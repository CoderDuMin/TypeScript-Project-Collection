<template>
  <div class="department">
    <PageSearch />
    <PageContent />
  </div>
</template>

<script setup lang="ts" >
import PageSearch from './cpns/page-search.vue'
import PageContent from './cpns/page-content.vue'
</script>

<style scoped>
.department {}
</style>
