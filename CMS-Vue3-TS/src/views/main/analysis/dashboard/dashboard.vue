<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <CountCard v-bind="item" />
        </el-col>
      </template>

    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import CountCard from './c-cpns/count-card/count-card.vue';
import useAnalysisStore from '@/store/modules/main/analysis/index'
const analysisStore = useAnalysisStore()
analysisStore.fetchAmountListDataAction()
const { amountList } = storeToRefs(analysisStore)
</script>

<style lang="scss" scoped>
.dashboard {
  color: red;
}
</style>
