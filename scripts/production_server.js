const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('dist'))

app.use('/src', express.static('src'))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))

app.listen(9156, () => console.log('OIP React Demo listening on port 9156!'))