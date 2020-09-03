const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const config = require('./config.json')
const app = express()

app.use(bodyParser.json());
app.use(router);


http.createServer(app).listen({ port: config.port, host: config.domain}, ()=>{
    console.log(`grafana proxy server started at ${config.port}`);
})
