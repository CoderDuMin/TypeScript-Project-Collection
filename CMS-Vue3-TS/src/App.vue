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

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
