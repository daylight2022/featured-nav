export default interface ICategoryItem {
  _id: string
  categoryId: string
  name: string
  icon?: string
  children: [{ _id: string; categoryId: string; name: string; icon?: string }]
}
