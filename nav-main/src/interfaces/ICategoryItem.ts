export default interface ICategoryItem {
  _id: string
  categoryId: string
  name: string
  icon?: string
  createAd?: number
  children: [{ _id: string; categoryId: string; name: string; icon?: string }]
}
