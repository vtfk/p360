const doCall = require('./do-call')
const service = 'ContactService'

module.exports = options => {
  return {
    SynchronizeContactPerson (query) {
      return doCall({ ...options, service, query, operation: 'SynchronizeContactPerson' })
    },
    SynchronizePrivatePerson (query) {
      return doCall({ ...options, service, query, operation: 'SynchronizePrivatePerson' })
    },
    SynchronizeEnterprise (query) {
      return doCall({ ...options, service, query, operation: 'SynchronizeEnterprise' })
    },
    GetContactPersons (query) {
      return doCall({ ...options, service, query, operation: 'GetContactPersons' })
    },
    GetPrivatePersons (query) {
      return doCall({ ...options, service, query, operation: 'GetPrivatePersons' })
    },
    GetEnterprises (query) {
      return doCall({ ...options, service, query, operation: 'GetEnterprises' })
    },
    UpdatePrivatePerson (query) {
      return doCall({ ...options, service, query, operation: 'UpdatePrivatePerson' })
    }
  }
}
