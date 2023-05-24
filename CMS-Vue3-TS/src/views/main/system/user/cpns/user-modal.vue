<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" :before-close="handleClose">
      <el-form :model="addForm" class="add-form" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="addForm.name" />
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="addForm.realname" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="addForm.password" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="addForm.cellphone" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="addForm.roleId" placeholder="请选择角色">
            <el-option label="管理员" value="shanghai" />
            <el-option label="清洁工" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select v-model="addForm.departmentId" placeholder="请选择部门">
            <el-option label="客服部" value="shanghai" />
            <el-option label="开发部" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onSubmit">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialogVisible = ref(true)
const addForm = ref({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  departmentId: '',
  roleId: ''
})

const handleClose = () => {
  addForm.value = {
    name: '',
    realname: '',
    password: '',
    cellphone: '',
    departmentId: '',
    roleId: ''
  }
  dialogVisible.value = false
}
const onSubmit = () => {
  console.log('submit', addForm.value)
}

const open = () => {
  dialogVisible.value = true
}

defineExpose({
  open
})
</script>

<style scoped lang="scss">
.add-form {
  padding: 0 20px;
}
</style>
