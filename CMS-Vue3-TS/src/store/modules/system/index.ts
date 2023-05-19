import { queryUserList } from "@/service/modules/system/user";
import { defineStore } from "pinia";

interface ISystemState {
  userList:any[],
  userTotal:number
}

const useSystemStore = defineStore('system',{
  state:():ISystemState => {
    return {
      userList:[],
      userTotal:0
    }
  },
  actions:{
    getUserListAction(params:any){
      queryUserList(params).then(res => {
        console.log('userlist',res.data)
        this.userList = res.data.list
        this.userTotal = res.data.totalCount
      })
    }
  }
})


export {
  useSystemStore
}
