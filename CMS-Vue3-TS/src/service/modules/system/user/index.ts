import dmRequest from "@/service/index"

export function queryUserList(queryParams: any) {
    return dmRequest.post({
        url: "/users/list",
        data: queryParams
    })
}
