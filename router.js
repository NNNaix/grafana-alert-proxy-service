const express = require('express')
const wechatHandler = require('./alertHandler/wechat')
const smsHandler = require('./alertHandler/sms')
const router = express.Router()

router
    .post('/wechat', wechatHandler)
    .post('/sms', smsHandler)

module.exports = router