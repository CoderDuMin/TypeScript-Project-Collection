<script setup lang="ts">
import useCounterStore from '@/store/modules/counter'

const countStore = useCounterStore()

const changeCount = () => {
  countStore.changeCountAction(999)
}
</script>

<template>
  <div style="height: 100%;width: 100%;">
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
