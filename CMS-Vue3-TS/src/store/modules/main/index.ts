import { getMenuList } from '@/service/modules/main/main'
import { getDepartmentList, getRoleList } from '@/service/modules/system/main'
import { defineStore } from 'pinia'

interface IMainState {
  roleList:any[],
  departmentList:any[],
  menuList:any[]
}

const useMainStore = defineStore('main',{
  state:():IMainState => {
    return {
      roleList:[],
      departmentList:[],
      menuList:[]
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
    },
    async getInitialDataAction(){
      this.roleList = (await getRoleList()).data.list
      this.departmentList = (await getDepartmentList()).data.list
      this.menuList = (await getMenuList()).data.list
    }
  }
})


export { useMainStore }
