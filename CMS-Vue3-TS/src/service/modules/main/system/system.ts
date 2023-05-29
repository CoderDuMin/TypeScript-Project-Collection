import dmRequest from "@/service/index"

export function queryUserList(queryParams: any) {
    return dmRequest.post({
        url: "/users/list",
        data: queryParams
    })
}

export function deleteUserById(id: any) {
  return dmRequest.delete({
      url: "/users/"+id,
  })
}

export function addNewUser(data: any) {
  return dmRequest.post({
      url: "/users/",
      data
  })
}

export function editUser(id:any,data: any) {
  return dmRequest.patch({
      url: "/users/"+id,
      data:data
  })
}

/** 针对页面的网络请求: 增删改查 */
export function postPageListData(pageName: string, queryInfo: any) {
  return dmRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageById(pageName: string, id: number) {
  return dmRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function newPageData(pageName: string, pageInfo: any) {
  return dmRequest.post({
    url: `/${pageName}`,
    data: pageInfo
  })
}

export function editPageData(pageName: string, id: number, pageInfo: any) {
  return dmRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
