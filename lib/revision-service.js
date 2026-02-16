const doCall = require('./do-call')
const service = 'RevisionService'

module.exports = options => {
  return {
    CreateRevision (query) {
      return doCall({ ...options, service, query, operation: 'CreateRevision' })
    },
    UpdateRevision (query) {
      return doCall({ ...options, service, query, operation: 'UpdateRevision' })
    },
    GetRevision (query) {
      return doCall({ ...options, service, query, operation: 'GetRevision' })
    },
    GetRevisions (query) {
      return doCall({ ...options, service, query, operation: 'GetRevisions' })
    },
    Ping (query) {
      return doCall({ ...options, service, query, operation: 'Ping' })
    }
  }
}
