<template>
  <div class="role">
    <page-search :search-config="searchConfig" @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <page-content :content-config="contentConfig" ref="contentRef" @new-click="handleNewRole"
      @edit-click="handleEditClick" />
    <page-modal :modal-config="modalConfig" :other-info="otherInfo" ref="modalRef">
      <template #menulist>
        <el-tree ref="treeRef" :data="menuList" show-checkbox node-key="id"
          :props="{ children: 'children', label: 'name' }" @check="handleCheckMenu" />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, nextTick } from 'vue'
import type { ElTree } from 'element-plus'

import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'

import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'

import PageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import { useMainStore } from '@/store/modules/main/index'
import { mapMenusToIds } from '@/utils/map-menus'

// 逻辑关系
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleNewClick, handleEditClick } = usePageModal(editCallBack)

const mainStore = useMainStore()
const { menuList } = storeToRefs(mainStore)

const treeRef = ref()

const otherInfo = ref({})
const handleCheckMenu = (data: any, data2: any) => {
  console.log('check', data, data2)
  otherInfo.value = {
    menuList: [...data2.checkedKeys, ...data2.halfCheckedKeys]
  }
  console.log('otherinfo', otherInfo.value)
}

function editCallBack(itemData: any) {
  console.log('editCallBack', itemData)
  nextTick(() => {
    const menuIds = mapMenusToIds(itemData.menuList)
    console.log(menuIds)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}

function handleNewRole() {
  handleNewClick()
  treeRef.value?.setCheckedKeys([])
}
</script>

<style lang="less" scoped></style>
