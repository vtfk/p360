const CaseService = require('./lib/case-service')
const ContactService = require('./lib/contact-service')
const DocumentService = require('./lib/document-service')
const FileService = require('./lib/file-service')
const UserService = require('./lib/user-service')

module.exports = options => ({
  CaseService: CaseService(options),
  ContactService: ContactService(options),
  DocumentService: DocumentService(options),
  FileService: FileService(options),
  UserService: UserService(options)
})
