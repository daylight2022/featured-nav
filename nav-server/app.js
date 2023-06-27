const express = require('express')
const mongonse = require('mongoose')
const router = require('./router.js')

const db = mongonse.connect('mongodb://localhost:27017/navigation')

const app = express()
const port = 3000

app.use('/api', router)
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
