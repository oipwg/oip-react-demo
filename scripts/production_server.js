const path = require('path')
const express = require('express')
const config = require('../config')

const app = express()

if (config.url_basename !== "") // Has path
	app.use(config.url_basename, express.static(__dirname + '/../config/dist'))
else // No Path
	app.use(express.static(__dirname + '/../config/dist'))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../config/dist/index.html')))

app.listen(config.port, config.host, () => console.log('OIP React Demo listening on ' + config.host + ':' + config.port))