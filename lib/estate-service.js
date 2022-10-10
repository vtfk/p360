const doCall = require('./do-call')
const service = 'EstateService'

module.exports = options => {
  return {
    SyncronizeEstate (query) {
      return doCall({ ...options, service, query, operation: 'SyncronizeEstate' })
    },
    GetEstates (query) {
      return doCall({ ...options, service, query, operation: 'GetEstates' })
    },
    Ping (query) {
      return doCall({ ...options, service, query, operation: 'Ping' })
    }
  }
}
