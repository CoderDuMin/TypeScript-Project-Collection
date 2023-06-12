import { getAmountListData } from '@/service/modules/analysis'
import { defineStore } from 'pinia'

interface IState {
  amountList:any[]
}

const useAnalySisStore = defineStore('analysis',{
  state:():IState => {
    return {
      amountList:[]
    }
  },
  actions:{
    async fetchAmountListDataAction(){
      const amountResult = await getAmountListData()
      console.log(amountResult)
      this.amountList = amountResult.data
    }
  }
})


export default useAnalySisStore
