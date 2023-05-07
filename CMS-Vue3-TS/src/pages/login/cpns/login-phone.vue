<template>
  <div class="login-phone">
    <el-form label-position="left" :model="form" :rules="formRules" status-icon>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FormRules } from 'element-plus';

const form = ref({
  phone: '',
  password: '',
})
const formRules: FormRules = {
  phone: [
    { required: true, message: '电话不能为空', trigger: 'blur' },
    { pattern: /^1[0-9]{10}/, message: '长度应为为11的字母或数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
  ]
}

const loginAction = () => {
  console.log('电话登录action', form.value)
  return form.value
}

defineExpose({
  loginAction
})
</script>

<style scoped lang="scss">
.login-phone {}
</style>
