<template>
  <div class="user">
    <div class="search">
      <el-form :inline="true" :model="form" class="">
        <el-form-item label="用户名">
          <el-input v-model="form.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="form.realname" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input v-model="form.cellphone" placeholder="请输入电话号码" />
        </el-form-item>
        <el-form-item label="用户状态">
          <el-select v-model="form.enable" placeholder="请输入真实姓名">
            <el-option label="启用" :value="1" />
            <el-option label="禁用" :value="2" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <div class="header">头部</div>
      <div class="table">表格</div>
      <div class="pagination">分页</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { queryUserList } from '@/service/modules/system/user/index'

type formType = {
  name: string,
  realname: string,
  cellphone: string,
  enable: number
}

const form = ref<formType>({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1
})

const handleQuery = () => {
  console.log('查询', form.value)
  queryUserList({
    "offset": 0,
    "size": 10,
    ...form.value
  }).then(res => {
    console.log('结果', res.data)
  })
}
</script>

<style lang="scss" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;

  .search {
    padding: 20px 20px 0;
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 8px;

  }

  .content {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;

  }
}
</style>
