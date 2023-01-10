const express = require('express')
const app = express()
const port = 2000

app.use('/', express.static('./interface'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})