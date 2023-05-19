<template>
  <div class="user-content">
    <div class="header">
      <h3>用户列表</h3>
      <el-button type="primary" icon="plus">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="userList" stripe style="width: 100%;" max-height="500">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="用户名" width="120" />
        <el-table-column prop="realname" label="真实姓名" />
        <el-table-column prop="roleId" label="角色" />
        <el-table-column prop="cellphone" label="手机号" />
        <el-table-column prop="enable" label="用户状态" />
        <el-table-column prop="createAt" label="创建时间" />
        <el-table-column label="操作" width="180">
          <el-button text type="primary" icon="edit">编辑</el-button>
          <el-button text type="danger" icon="delete">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination :total="userTotal" layout="total, sizes, prev, pager, next, jumper" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/modules/system';
import { storeToRefs } from 'pinia';

const systemStore = useSystemStore()
const { userList, userTotal } = storeToRefs(systemStore)
</script>

<style scoped lang="scss">
.user-content {
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 8px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pagination {
    padding: 10px;
  }
}
</style>
