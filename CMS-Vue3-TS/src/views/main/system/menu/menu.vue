<template>
  <div class="menu">
    <PageContent :content-config="contentConfig" ref="contentRef" @new-click="handleNewClick"
      @edit-click="handleEditClick" />
    <PageModel :modal-config="modalConfigRef" ref="modalRef">
      <template #menuList="scope">

      </template>
    </PageModel>
  </div>
</template>

<script setup lang="ts" name="menu">
import { onMounted, computed } from 'vue';
import PageModel from '@/components/page-modal/page-modal.vue'
import PageContent from '@/components/page-content/page-content.vue';
import usePageContent from '@/hooks/usePageContent';
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config';
import usePageModal from '@/hooks/usePageModal';
import { useMainStore } from '@/store/modules/main';

const { contentRef, handleResetClick } = usePageContent()
const { modalRef, handleEditClick, handleNewClick } = usePageModal()

// 对modalConfig进行操作
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  const menulists = mainStore.menuList.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options.push(...menulists)
    }
  })

  return modalConfig
})

onMounted(() => {
  handleResetClick()
})
</script>

<style scoped>
.menu {}
</style>
