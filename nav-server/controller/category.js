const categoryModel = require("../model/categoryModel")

const category = {
  async list(req, res) {
    try {
      let data = await categoryModel.find({}).limit(100000)
      const stairCategory = data.filter(item=> !item.categoryId)
      const secondCategory = data.filter(item=> item.categoryId)

      let newData = stairCategory.map(item=> {
        item.children = [...secondCategory.filter(cate=> item._id == cate.categoryId)]
        return item
      })
      res.json({ data: newData })
    } catch (error) {
      res.json(error)
    }
  },
  async add(req, res) {
    try {
      console.log(req.body);
      const resData = await categoryModel.create(req.body)
      res.json(resData)
    } catch (error) {
      res.json(error)
    }
  },
  async edit(req, res) {
    try {
      const { id, name } = req.body
      const data = await categoryModel.updateOne({ _id: id }, { name })
      res.json(data)
    } catch (error) {
      res.json(error)
    }
  },
  async del(req, res) {
    try {
      const { id } = req.body
      const data = await Promise.all([
        categoryModel.remove({ _id: id }),
        categoryModel.remove({ categoryId: id }),
      ])
      res.json(data)
    } catch (error) {
      res.json(error)
    }
  },
}

module.exports = category