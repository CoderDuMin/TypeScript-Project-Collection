<script setup lang="ts">
import useCounterStore from '@/store/modules/counter'

const countStore = useCounterStore()

const changeCount = () => {
  countStore.changeCountAction(999)
}
</script>

<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
