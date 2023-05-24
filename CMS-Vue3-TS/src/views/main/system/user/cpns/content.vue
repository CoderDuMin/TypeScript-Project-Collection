<template>
  <div class="user-content">
    <div class="header">
      <h3>用户列表</h3>
      <el-button type="primary" icon="plus" @click="AddUser">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="userList" stripe style="width: 100%;">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="用户名" width="120" />
        <el-table-column prop="realname" label="真实姓名" />
        <el-table-column prop="roleId" label="角色" />
        <el-table-column prop="cellphone" label="手机号" />
        <el-table-column prop="enable" label="用户状态">
          <template #default="scope">
            <el-button :type="scope.row.enable == 1 ? 'primary' : 'danger'" plain>{{ scope.row.enable == 1 ? '启用' : '禁用'
            }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="createAt" label="创建时间">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="更新时间">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="220">
          <template #default="scope">
            <el-button text type="primary" icon="edit">编辑</el-button>
            <el-button text type="danger" icon="delete" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination v-model:page-size="pageSize" v-model:current-page="pageNum" :total="userTotal"
        @current-change="pageChange" @size-change="sizeChange" layout="total, sizes, prev, pager, next, jumper" />
    </div>

    <UserModal ref="userModalRef"></UserModal>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/modules/system';
import { storeToRefs } from 'pinia';
import { formatUTC } from '@/utils/format'
import { ref } from 'vue';
import UserModal from './user-modal.vue'

const systemStore = useSystemStore()
const { userList, userTotal } = storeToRefs(systemStore)

const userModalRef = ref<InstanceType<typeof UserModal>>()

const pageSize = ref(10)
const pageNum = ref(1)
const cacheQuery = ref<any>({})

const pageChange = () => {
  let queryParams = {
    size: pageSize.value,
    offset: pageNum.value - 1,
    ...cacheQuery.value
  }
  systemStore.getUserListAction(queryParams)
}
const sizeChange = () => {
  pageNum.value = 1
  let queryParams = {
    size: pageSize.value,
    offset: pageNum.value - 1,
    ...cacheQuery.value
  }
  systemStore.getUserListAction(queryParams)
}

const queryUser = (query?: any) => {
  pageNum.value = 1
  cacheQuery.value = query
  let queryParams = {
    size: pageSize.value,
    offset: pageNum.value,
    ...cacheQuery.value
  }
  systemStore.getUserListAction(queryParams)
}
const handleDelete = (id: number) => {
  systemStore.deleteUserAction(id)
}
const AddUser = () => {
  console.log('新建用户')
  userModalRef.value?.open()
}

let huan = 0
let cache = 0
const sum = (all: number): number => {
  if (all >= 3) {
    huan += Math.floor(all / 3)
    cache = all % 3 + Math.floor(all / 3)
    if (cache > 3) {
      return sum(cache)
    } else {
      return 0
    }

  } else {
    return 0
  }
}
sum(21)
console.log('asdasd', huan)

defineExpose({
  queryUser
})
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
