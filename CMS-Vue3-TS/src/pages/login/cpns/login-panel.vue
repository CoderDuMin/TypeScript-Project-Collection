<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <div class="tabs">
      <el-tabs v-model="currentTab" type="border-card" stretch>
        <el-tab-pane label="账号登录" name="account">
          <LoginAccount ref="loginAccountRef"></LoginAccount>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <LoginPhone ref="loginPhoneRef"></LoginPhone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="tool">
      <el-checkbox v-model="isKeepPwd" label="记住密码" />
      <el-link href="http://www.baidu.com" type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" size="large" style="width:100%;" @click="handleLogin">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_REMPWD } from '@/common/constants';
import { login } from '@/service/modules/login';
import { localCache } from '@/utils/cache';
import { ref, watch } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

const currentTab = ref('account')
const isKeepPwd = ref<boolean>(!!localCache.getCache(LOGIN_REMPWD))

const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()


const handleLogin = () => {
  if (currentTab.value == 'account') {
    loginAccountRef.value?.loginAction(isKeepPwd.value)
  } else {
    loginPhoneRef.value?.loginAction()
  }
}

watch(isKeepPwd, (newValue) => {
  localCache.setCache(LOGIN_REMPWD, newValue)
})
</script>

<style scoped lang="scss">
.login-panel {
  width: 300px;
  height: 200px;
  // border: 1px solid #eee;

  padding: 10px;
  text-align: center;
  margin-bottom: 200px;

  .tabs {
    border-collapse: collapse;
  }

  .tool {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 0;
  }
}
</style>
