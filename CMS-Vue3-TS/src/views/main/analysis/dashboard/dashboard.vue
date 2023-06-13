<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <CountCard v-bind="item" />
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="8">
        <ChartCard>
          <PieEchart />
        </ChartCard>
      </el-col>
      <el-col :span="8">
        <ChartCard>
          <LineEchart />
        </ChartCard>
      </el-col>
      <el-col :span="8">
        <ChartCard>
          <BarEchart />
        </ChartCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useAnalysisStore from '@/store/modules/main/analysis/index'
import CountCard from './c-cpns/count-card/count-card.vue';
import ChartCard from './c-cpns/chart-card/cahrt-card.vue'
import { BarEchart, PieEchart, LineEchart } from '@/components/page-echarts'

const analysisStore = useAnalysisStore()
analysisStore.fetchAmountListDataAction()
const { amountList } = storeToRefs(analysisStore)
</script>

<style lang="scss" scoped>
.dashboard {
  color: red;
}

.el-row {
  margin-bottom: 10px;
}
</style>
