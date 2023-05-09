import dmRequest from "@/service/index"

export function login(account: any) {
    return dmRequest.post({
        url: "/login",
        data: account
    })
}

export function getUserById(id: any) {
    return dmRequest.get({
        url: "/users/" + id
    })
}

export function getRoleMenuById(id: any) {
    return dmRequest.get({
        url: `/role/${id}/menu`
    })
}
