<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" :title="addStatus ? '新建部门' : '编辑部门'" width="30%" :before-close="handleClose">
      <el-form :model="formData" label-width="80px" size="large">
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入部门名称" />
        </el-form-item>
        <el-form-item label="部门领导" prop="leader">
          <el-input v-model="formData.leader" placeholder="请输入部门领导" />
        </el-form-item>
        <el-form-item label="选择部门" prop="parentId">
          <el-select v-model="formData.parentId" placeholder="请选择部门" style="width: 100%">
            <template v-for="item in departmentList" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
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
const formData = ref<any>({
})

const handleClose = () => {
  addStatus.value = true
  formData.value = {
  }
  dialogVisible.value = false
}
const onSubmit = () => {
  console.log('submit', formData.value)
  if (addStatus.value) {
    let form = { ...formData.value }
    systemStore.newPageDataAction('department', form)
    handleClose()
  } else {
    let id = formData.value.id
    let form: any = {
      leader: formData.value.leader,
      name: formData.value.name,
      parentId: formData.value.parentId
    }
    systemStore.editPageDataAction('department', id, form)
    handleClose()
  }
}

const open = (isEdit: boolean = false, info?: any) => {
  dialogVisible.value = true
  if (isEdit && info) {
    addStatus.value = false
    formData.value = { ...info }
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
