<template>
  <div class="user-content">
    <div class="header">
      <h3>用户列表</h3>
      <el-button type="primary" icon="plus">新建用户</el-button>
    </div>
    <div class="table">表格</div>
    <div class="pagination">分页</div>
  </div>
</template>

<script setup lang="ts">

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
}
</style>
