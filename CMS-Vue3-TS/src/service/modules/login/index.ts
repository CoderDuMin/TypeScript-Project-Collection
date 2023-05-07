import dmRequest from "@/service/index"

export function login(account: any) {
    return dmRequest.post({
        url: "/login",
        data: account
    })
}
