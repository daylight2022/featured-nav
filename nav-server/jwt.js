const expressJwt = require('express-jwt')
const {secretKey} = require('./config')
const jwtAuth = expressJwt.expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({
  path: ['/api/login', '/api/nav/find', '/api/audit/add', '/api/index', '/api/category/list', '/api/category/add', '/api/hotspots'],
})

module.exports = jwtAuth
