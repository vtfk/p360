const doCall = require('./do-call')
const service = 'AccessGroupService'

module.exports = options => {
  return {
    GetAccessGroups (query) {
      return doCall({ ...options, service, query, operation: 'GetAccessGroups' })
    },
    Ping (query) {
      return doCall({ ...options, service, query, operation: 'Ping' })
    }
  }
}
