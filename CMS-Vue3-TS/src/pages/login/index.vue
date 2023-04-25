<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/login-panel.vue'
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: radial-gradient(transparent 1px, #fff 1px);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
