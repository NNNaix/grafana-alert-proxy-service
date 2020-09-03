const Core = require('@alicloud/pop-core');
const config = require('../config.json')

function smsHandler(req) {
    const alertNotificationData = req.body

    const client = new Core({
        accessKeyId: config.sms.accessKeyId,
        accessKeySecret: config.sms.accessKeySecret,
        endpoint: config.sms.endpoint,
        apiVersion: config.sms.apiVersion
    });

    const templateParams = {
        name: alertNotificationData.title
    }

    const params = {
        RegionId: config.sms.regionId,
        SignName: config.sms.signName,
        TemplateCode: config.sms.templateCode,
        PhoneNumbers: config.sms.oncallPhoneList.join(),
        TemplateParam: JSON.stringify(templateParams)
    }

    const requestOption = {
        method: 'POST'
    };
    console.log(params)

    client.request('SendSms', params, requestOption).then((result) => {
        console.log(JSON.stringify(result));
    }, (ex) => {
        console.log(ex);
    })
}

module.exports = smsHandler