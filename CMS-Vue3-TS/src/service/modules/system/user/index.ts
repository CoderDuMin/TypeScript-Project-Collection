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

