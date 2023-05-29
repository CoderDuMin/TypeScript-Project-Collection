import dmRequest from "@/service/index"

export function getRoleList(queryParams?: any) {
  return dmRequest.post({
      url: "/role/list",
      data: {
        "offset": 0,
        "size": 100,
        ...queryParams
      }
  })
}

export function getDepartmentList(queryParams?: any) {
  return dmRequest.post({
      url: "/department/list",
      data: {
        "offset": 0,
        "size": 100,
        ...queryParams
      }
  })
}
