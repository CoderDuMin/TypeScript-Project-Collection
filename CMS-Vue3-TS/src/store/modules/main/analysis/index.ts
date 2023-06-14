import { getAmountListData, getGoodsCategoryCount, getGoodsCategorySale } from '@/service/modules/analysis'
import { defineStore } from 'pinia'

interface IState {
  amountList:any[],
  goodsCategoryCount:any[],
  goodsCategorySale:any[]
}

const useAnalySisStore = defineStore('analysis',{
  state:():IState => {
    return {
      amountList:[],
      goodsCategoryCount:[],
      goodsCategorySale:[]
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
    }
  }
})


export default useAnalySisStore
