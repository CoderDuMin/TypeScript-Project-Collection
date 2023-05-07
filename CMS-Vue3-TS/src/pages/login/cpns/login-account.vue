<template>
  <div class="login-name">
    <el-form ref="formRef" label-position="left" :model="form" :rules="formRules" status-icon>
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { useLoginStore } from '@/store/modules/login'

const loginStore = useLoginStore()
const formRef = ref<FormInstance>()

const form = ref({
  name: '',
  password: '',
})
const formRules: FormRules = {
  name: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    { pattern: /[a-z0-9]{5,20}/, message: '长度应为为5-20的字母或数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
  ]
}

const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('账号登录action', form.value)
      let account = form.value
      loginStore.loginAction(account)
    }
    else {
      ElMessage.error('请确认登录格式是否正确!')
    }
  })

}

defineExpose({
  loginAction
})
</script>

<style scoped lang="scss">
.login-name {}
</style>
