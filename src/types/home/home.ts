export type GoodsNew = {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

export type GoodsHot = {
  id: string
  picture: string
  title: string
  alt: string
}

export type GoodsBrand = {
  id: string
  msg: string
  result: Object[]
  picture: string
  name: string
  nameEn: string
}

/**
 * 商品专区
 */
export type ProductGoods = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}

export type ProductChildren = {
  id: string
  name: string
  layer: number
  parent: number
}

export type Product = {
  id: string
  name: string
  picture: string
  saleInfo: string
  msg: string
  goods: ProductGoods[]
  children: ProductChildren[]
}
