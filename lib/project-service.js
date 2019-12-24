const doCall = require('./do-call')
const service = 'ProjectService'

module.exports = options => {
  return {
    CreateProject (query) {
      return doCall({ ...options, service, query, operation: 'CreateProject' })
    },
    UpdateProject (query) {
      return doCall({ ...options, service, query, operation: 'UpdateProject' })
    },
    GetProjects (query) {
      return doCall({ ...options, service, query, operation: 'GetProjects' })
    }
  }
}
