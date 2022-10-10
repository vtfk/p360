const doCall = require('./do-call')
const service = 'DocumentService'

module.exports = options => {
  return {
    CreateDocument (query) {
      return doCall({ ...options, service, query, operation: 'CreateDocument' })
    },
    UpdateDocument (query) {
      return doCall({ ...options, service, query, operation: 'UpdateDocument' })
    },
    SignOffDocument (query) {
      return doCall({ ...options, service, query, operation: 'SignOffDocument' })
    },
    DispatchDocuments (query) {
      return doCall({ ...options, service, query, operation: 'DispatchDocuments' })
    },
    GetDocuments (query) {
      return doCall({ ...options, service, query, operation: 'GetDocuments' })
    },
    Ping (query) {
      return doCall({ ...options, service, query, operation: 'Ping' })
    }
  }
}
