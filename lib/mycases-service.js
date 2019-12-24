const doCall = require('./do-call')
const service = 'MyCasesService'

module.exports = options => {
  return {
    GetMyCases (query) {
      return doCall({ ...options, service, query, operation: 'GetMyCases' })
    }
  }
}
