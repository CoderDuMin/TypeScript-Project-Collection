import { getDepartmentList, getRoleList } from '@/service/modules/system/main'
import { defineStore } from 'pinia'

interface IMainState {
  roleList:any[],
  departmentList:any[]
}

const useMainStore = defineStore('main',{
  state:():IMainState => {
    return {
      roleList:[],
      departmentList:[]
    }
  },
  actions:{
    getRoleListAction(){
      getRoleList().then(res => {
        this.roleList = res.data.list
      })
    },
    getDepartmentListAction(){
      getDepartmentList().then(res => {
        this.departmentList = res.data.list
      })
    }
  }
})


export { useMainStore }
