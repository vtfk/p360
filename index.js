const CaseService = require('./lib/case-service')
const ContactService = require('./lib/contact-service')

module.exports = options => ({
  CaseService: CaseService(options),
  ContactService: ContactService(options)
})
