const express = require('express')
const app = express()
const port = 8082

app.use('/', express.static('MyWorld'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})