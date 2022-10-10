const doCall = require('./do-call')
const service = 'CaseService'

module.exports = options => {
  return {
    CreateCase (query) {
      return doCall({ ...options, service, query, operation: 'CreateCase' })
    },
    UpdateCase (query) {
      return doCall({ ...options, service, query, operation: 'UpdateCase' })
    },
    GetCases (query) {
      return doCall({ ...options, service, query, operation: 'GetCases' })
    },
    Ping (query) {
      return doCall({ ...options, service, query, operation: 'Ping' })
    }
  }
}
