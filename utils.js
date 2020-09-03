function getGrafanaAlertUrl({ruleUrl, orgId, panelId}) {
    return `${ruleUrl}?orgId=${orgId}&editPanel=${panelId}&tab=alert`
}

module.exports = {
    getGrafanaAlertUrl
}