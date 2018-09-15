const path = require('path')
const express = require('express')
const proxy = require('http-proxy-middleware');

const app = express()

app.use(express.static(__dirname + '/../config/dist'))

// Proxy the IPFS Download server to allow downloading without opening a new window.
var ipfs_proxy = proxy("https://ipfs.oip.io/ipfs");

// Add the IPFS proxy
app.use('/ipfs', ipfs_proxy)

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../config/dist/index.html')))

app.listen(9156, () => console.log('OIP React Demo listening on port 9156!'))