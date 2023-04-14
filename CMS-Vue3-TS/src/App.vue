<script setup lang="ts">
import useCounterStore from '@/store/modules/counter'

const countStore = useCounterStore()

const changeCount = () => {
  countStore.changeCountAction(999)
}
</script>

<template>
  <div>
    <h2>{{ countStore.count }} -> {{ countStore.doubleCounter }}</h2>
    <button @click="changeCount">改变数字</button>
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
