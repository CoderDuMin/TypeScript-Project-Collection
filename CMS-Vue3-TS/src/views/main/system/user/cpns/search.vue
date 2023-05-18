<template>
  <div class="search-bar">
    <el-form :inline="true" :model="form" class="">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="真实姓名" prop="realname">
        <el-input v-model="form.realname" placeholder="请输入真实姓名" />
      </el-form-item>
      <el-form-item label="电话号码" prop="cellphone">
        <el-input v-model="form.cellphone" placeholder="请输入电话号码" />
      </el-form-item>
      <el-form-item label="用户状态" prop="enable">
        <el-select v-model="form.enable" placeholder="请选择用户状态">
          <el-option label="启用" :value="1" />
          <el-option label="禁用" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间" style="width: 480px;" prop="createAt">
        <el-date-picker v-model="form.createAt" type="datetimerange" range-separator="-" start-placeholder="开始日期"
          end-placeholder="结束日期" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" icon="search" @click="handleQuery">查询</el-button>
        <el-button type="primary" size="large" icon="refresh" @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { queryUserList } from '@/service/modules/system/user/index'

type formType = {
  name: string,
  realname: string,
  cellphone: string,
  enable: number,
  createAt: any[]
}

const emit = defineEmits(['query', 'reset'])

const form = ref<formType>({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt: []
})

const handleQuery = () => {
  emit('query', form.value)
  // queryUserList({
  //   "offset": 0,
  //   "size": 10,
  //   ...form.value
  // }).then(res => {
  //   console.log('结果', res.data)
  // })
}
const handleReset = () => {
  form.value = {
    name: '',
    realname: '',
    cellphone: '',
    enable: 1,
    createAt: []
  }
  emit('query', form.value)

}
</script>

<style scoped lang="scss">
.search-bar {
  padding: 20px 20px 0;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 8px;
}
</style>
