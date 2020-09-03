const axios = require('axios')
const utils = require('../utils')
const config =  require('../config.json')

function wechatHandler(req) {
    const alertNotificationData = req.body
    axios.post(config.wechatWebHookUrl, {
        msgtype: 'news',
        news: {
            articles: [{
                title: alertNotificationData.title,
                description: alertNotificationData.message,
                url: utils.getGrafanaAlertUrl({ ruleUrl: alertNotificationData.ruleUrl, panelId: alertNotificationData.panelId, orgId: alertNotificationData.orgId}),
                picurl: alertNotificationData.imageUrl
            }]
        }
    }).then((response)=>{
        console.log(response.data)
    }).catch(error => {
        console.error(error)
    })
}

module.exports = wechatHandler