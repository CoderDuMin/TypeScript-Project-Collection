import dmRequest from "@/service/index"

export function getAmountListData() {
  return dmRequest.get({
      url: "/goods/amount/list",
  })
}
