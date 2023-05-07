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
  background: linear-gradient(-135deg, #e8a57b, #6ecffe);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
