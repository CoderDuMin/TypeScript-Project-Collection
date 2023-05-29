import { postPageListData,addNewUser, deleteUserById, editUser, queryUserList, deletePageById, newPageData, editPageData, } from "@/service/modules/main/system/system";
import { defineStore } from "pinia";

interface ISystemState {
  userList:any[],
  userTotal:number,
  pageList:any[],
  pageTotalCount:number
}

const useSystemStore = defineStore('system',{
  state:():ISystemState => {
    return {
      userList:[],
      userTotal:0,
      pageList:[],
      pageTotalCount:0
    }
  },
  actions:{
    getUserListAction(params:any){
      queryUserList(params).then(res => {
        console.log('userlist',res.data)
        this.userList = res.data.list
        this.userTotal = res.data.totalCount
      })
    },
    deleteUserAction(id:any){
      deleteUserById(id).then(res => {
        this.getUserListAction({size:'10',offset:'0'})
      })
    },
    editUserAction(id:any,info:any){
      editUser(id,info).then(res => {
        this.getUserListAction({size:'10',offset:'0'})
      })
    },
    addNewUserAction(info:any){
      addNewUser(info).then(res => {
        this.getUserListAction({size:'10',offset:'0'})
      })
    },
     /** 针对页面的数据: 增删改查 */
     async postPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      const { totalCount, list } = pageListResult.data

      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageByIdAction(pageName: string, id: number) {
      const deleteResult = await deletePageById(pageName, id)
      console.log(deleteResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async newPageDataAction(pageName: string, pageInfo: any) {
      const newResult = await newPageData(pageName, pageInfo)
      console.log(newResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async editPageDataAction(pageName: string, id: number, pageInfo: any) {
      const editResult = await editPageData(pageName, id, pageInfo)
      console.log(editResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    }
  }
})


export {
  useSystemStore
}
