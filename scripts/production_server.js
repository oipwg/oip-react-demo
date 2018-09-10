const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('../config/dist'))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../config/dist/index.html')))

app.listen(9156, () => console.log('OIP React Demo listening on port 9156!'))