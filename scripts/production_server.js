const path = require('path')
const express = require('express')
const config = require('../config')

const app = express()

app.use(express.static(__dirname + '/../config/dist'))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../config/dist/index.html')))

app.listen(config.port, config.host, () => console.log('OIP React Demo listening on ' + config.host + ':' + config.port))