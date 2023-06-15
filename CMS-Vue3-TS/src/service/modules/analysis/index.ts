import dmRequest from "@/service/index"

export function getAmountListData() {
  return dmRequest.get({
      url: "/goods/amount/list",
  })
}

export function getGoodsCategoryCount() {
  return dmRequest.get({
      url: "/goods/category/count",
  })
}

export function getGoodsCategorySale() {
  return dmRequest.get({
      url: "/goods/category/sale",
  })
}
export function getGoodsCategoryFavor() {
  return dmRequest.get({
      url: "/goods/category/favor",
  })
}
export function getGoodsTopCount() {
  return dmRequest.get({
      url: "/goods/sale/top10",
  })
}
