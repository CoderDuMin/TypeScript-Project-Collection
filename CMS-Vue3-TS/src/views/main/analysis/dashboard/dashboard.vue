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
        <ChartCard title="商品分类数量统计">
          <PieEchart :pie-data="categoryCount" />
        </ChartCard>
      </el-col>
      <el-col :span="8">
        <ChartCard title="商品地区销量统计">
          <LineEchart />
        </ChartCard>
      </el-col>
      <el-col :span="8">
        <ChartCard title="商品分类销量统计">
          <RoseEchart :rose-data="categorySale" />
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
import { BarEchart, PieEchart, LineEchart, RoseEchart } from '@/components/page-echarts'
import { computed } from 'vue';

const analysisStore = useAnalysisStore()
analysisStore.fetchAmountListDataAction()
const { amountList, goodsCategoryCount, goodsCategorySale } = storeToRefs(analysisStore)
const categoryCount = computed(() => {
  return goodsCategoryCount.value.map(item => ({ name: item.name, value: item.goodsCount }))
})
const categorySale = computed(() => {
  return goodsCategorySale.value.map(item => ({ name: item.name, value: item.goodsCount }))
})
</script>

<style lang="scss" scoped>
.dashboard {
  color: red;
}

.el-row {
  margin-bottom: 10px;
}
</style>
