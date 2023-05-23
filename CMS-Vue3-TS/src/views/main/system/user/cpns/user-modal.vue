<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
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

const open = () => {
  dialogVisible.value = true
}

defineExpose({
  open
})
</script>

<style scoped lang="scss">
.user-modal {}
</style>
