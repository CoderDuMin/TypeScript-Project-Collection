<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <div class="tabs">
      <el-tabs v-model="currentTab" type="card" stretch>
        <el-tab-pane label="账号登录" name="account"></el-tab-pane>
        <el-tab-pane label="手机登录" name="phone"></el-tab-pane>
      </el-tabs>
      <div class="form">
        <el-form label-position="left" :model="form">
          <el-form-item label="账号" required>
            <el-input v-model="form.account" />
          </el-form-item>
          <el-form-item label="密码" required>
            <el-input v-model="form.password" />
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="tool">
      <el-checkbox v-model="isKeepPwd" label="记住密码" />
      <el-link href="http://www.baidu.com" type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" size="large" style="width:100%;">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElCheckbox, ElLink, ElButton, ElTabs, ElTabPane, ElForm, ElFormItem, ElInput } from 'element-plus'

const currentTab = ref('account')
const form = ref({
  account: '',
  password: ''
})
const isKeepPwd = ref(false)
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

    .form {
      padding: 10px 20px;
      border: 1px solid #eee;
      border-top: none;
      margin-top: -15px;
    }
  }

  .tool {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 0;
  }
}
</style>
