const CaseService = require('./lib/case-service')

module.exports = options => ({
  CaseService: CaseService(options)
})
