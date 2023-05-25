<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" :title="addStatus ? '新建用户' : '编辑用户'" width="30%" :before-close="handleClose">
      <el-form :model="addForm" class="add-form" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="addForm.name" />
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="addForm.realname" />
        </el-form-item>
        <el-form-item label="密码" v-if="addStatus">
          <el-input v-model="addForm.password" show-password />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="addForm.cellphone" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="addForm.roleId" placeholder="请选择角色" style="width:100%;">
            <el-option v-for="item in roleList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select v-model="addForm.departmentId" placeholder="请选择部门" style="width:100%;">
            <el-option v-for="item in departmentList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onSubmit">
            {{ addStatus ? '新增' : '编辑' }}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/modules/main';
import { useSystemStore } from '@/store/modules/system';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const mainStore = useMainStore()
const systemStore = useSystemStore()
const { departmentList, roleList } = storeToRefs(mainStore)

const dialogVisible = ref(false)
const addStatus = ref(true)
const addForm = ref<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  departmentId: '',
  roleId: ''
})

const handleClose = () => {
  addStatus.value = true
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
  if (addStatus.value) {
    let form = { ...addForm.value }
    systemStore.addNewUserAction(form)
    handleClose()
  } else {
    let id = addForm.value.id
    let form: any = {
      name: addForm.value.name,
      realname: addForm.value.realname,
      cellphone: addForm.value.cellphone,
      departmentId: addForm.value.departmentId,
      roleId: addForm.value.roleId
    }
    systemStore.editUserAction(id, form)
    handleClose()
  }
}

const open = (isEdit: boolean = false, info?: any) => {
  dialogVisible.value = true
  if (isEdit && info) {
    addStatus.value = false
    addForm.value = info
  }
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
