<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <header-info />
    </div>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['fold'])
defineProps({
  isFold: {
    type: Boolean,
    requried: true
  }
})

const handleMenuIconClick = () => {
  emit('fold')
}
</script>

<style scoped lang="scss">
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
