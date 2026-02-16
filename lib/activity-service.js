const doCall = require('./do-call')
const service = 'ActivityService'

module.exports = options => {
  return {
    CreateWorkflowActivity (query) {
      return doCall({ ...options, service, query, operation: 'CreateWorkflowActivity' })
    },
    UpdateWorkflowActivity (query) {
      return doCall({ ...options, service, query, operation: 'UpdateWorkflowActivity' })
    },
    GetWorkflowActivities (query) {
      return doCall({ ...options, service, query, operation: 'GetWorkflowActivities' })
    },
    GetProgressPlanDetails (query) {
      return doCall({ ...options, service, query, operation: 'GetProgressPlanDetails' })
    },
    GetHandlingActivities (query) {
      return doCall({ ...options, service, query, operation: 'GetHandlingActivities' })
    },
    AddHandlingActivity (query) {
      return doCall({ ...options, service, query, operation: 'AddHandlingActivity' })
    },
    UpdateHandlingActivity (query) {
      return doCall({ ...options, service, query, operation: 'UpdateHandlingActivity' })
    },
    Subcontracts (query) {
      return doCall({ ...options, service, query, operation: 'Subcontracts' })
    },
    Ping (query) {
      return doCall({ ...options, service, query, operation: 'Ping' })
    }
  }
}
