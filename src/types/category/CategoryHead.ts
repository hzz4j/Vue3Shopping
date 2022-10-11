type SubCategory = {
  id: string
  name: string
  picture: string
}

type Good = {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

// 头部分类信息
export type CategoryHead = {
  id: string
  name: string
  picture: string
  children: SubCategory[]
  goods: Good[]
}
