import { getAmountListData, getGoodsCategoryCount, getGoodsCategoryFavor, getGoodsCategorySale, getGoodsTopCount } from '@/service/modules/analysis'
import { defineStore } from 'pinia'

interface IState {
  amountList:any[],
  goodsCategoryCount:any[],
  goodsCategorySale:any[],
  goodsCategoryFavor:any[],
  goodsTop:any[]
}

const useAnalySisStore = defineStore('analysis',{
  state:():IState => {
    return {
      amountList:[],
      goodsCategoryCount:[],
      goodsCategorySale:[],
      goodsCategoryFavor:[],
      goodsTop:[]
    }
  },
  actions:{
    async fetchAmountListDataAction(){
      getAmountListData().then(res=>{
        this.amountList = res.data
      })
      getGoodsCategoryCount().then(res => {
        this.goodsCategoryCount = res.data
      })
      getGoodsCategorySale().then(res => {
        this.goodsCategorySale = res.data
      })
      getGoodsCategoryFavor().then(res => {
        this.goodsCategoryFavor = res.data
      })
      getGoodsTopCount().then(res => {
        this.goodsTop = res.data
      })
    }
  }
})


export default useAnalySisStore
