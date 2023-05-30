<template>
  <div class="user-content">
    <div class="header">
      <h3>用户列表</h3>
      <el-button type="primary" icon="plus" @click="AddUser">新建部门</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" stripe style="width: 100%;">
        <el-table-column align="center" type="index" label="序号" width="60px" />

        <el-table-column align="center" label="部门名称" prop="name" width="150px" />
        <el-table-column align="center" label="部门领导" prop="leader" width="150px" />
        <el-table-column align="center" label="上级部门" prop="parentId" width="150px" />
        <el-table-column align="center" label="创建时间" prop="createAt">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="更新时间" prop="updateAt">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="220" align="center">
          <template #default="scope">
            <el-button text type="primary" icon="edit" @click="editUser(scope.row)">编辑</el-button>
            <el-button text type="danger" icon="delete" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination v-model:page-size="pageSize" v-model:current-page="pageNum" :total="pageTotalCount"
        @current-change="pageChange" @size-change="sizeChange" layout="total, sizes, prev, pager, next, jumper" />
    </div>

    <PageModal ref="userModalRef"></PageModal>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/modules/system';
import { storeToRefs } from 'pinia';
import { formatUTC } from '@/utils/format'
import { ref } from 'vue';
import PageModal from './page-modal.vue'

const systemStore = useSystemStore()
const { pageList, pageTotalCount } = storeToRefs(systemStore)

const userModalRef = ref<InstanceType<typeof PageModal>>()

const pageSize = ref(10)
const pageNum = ref(1)
const cacheQuery = ref<any>({})

const pageChange = () => {
  let queryParams = {
    size: pageSize.value,
    offset: pageNum.value - 1,
    ...cacheQuery.value
  }
  systemStore.postPageListAction('department', queryParams)
}
const sizeChange = () => {
  pageNum.value = 1
  let queryParams = {
    size: pageSize.value,
    offset: pageNum.value - 1,
    ...cacheQuery.value
  }
  systemStore.postPageListAction('department', queryParams)
}

const queryPage = (query?: any) => {
  pageNum.value = 1
  cacheQuery.value = { ...query }
  let queryParams = {
    size: pageSize.value,
    offset: pageNum.value - 1,
    ...cacheQuery.value
  }
  systemStore.postPageListAction('department', queryParams)
}
const handleDelete = (id: number) => {
  systemStore.deletePageByIdAction('department', id)
}
const AddUser = () => {
  console.log('新建用户')
  userModalRef.value?.open()
}
const editUser = (info: any) => {
  console.log('编辑用户')
  userModalRef.value?.open(true, info)
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
  queryPage
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
