const mongoose = require('mongoose')

/**
 * @param status 审核状态： 0待审核，1审核成功，2拒绝
 */
var auditSchema = new mongoose.Schema(
  {
    categoryId: String,
    name: String,
    createAt: Number,
    url: String,
    href: String,
    logo: String,
    desc: String,
    status: Number,
  },
  { collection: 'audit' }
)

module.exports = mongoose.model('audit', auditSchema)
