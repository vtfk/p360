const doCall = require('./do-call')
const service = 'UserService'

module.exports = options => {
  return {
    SynchronizeUser (query) {
      return doCall({ ...options, service, query, operation: 'SynchronizeUser' })
    },
    GetUsers (query) {
      return doCall({ ...options, service, query, operation: 'GetUsers' })
    },
    Ping (query) {
      return doCall({ ...options, service, query, operation: 'Ping' })
    }
  }
}
