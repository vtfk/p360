const AccessGroupService = require('./lib/accessgroup-service')
const CaseService = require('./lib/case-service')
const ContactService = require('./lib/contact-service')
const DocumentService = require('./lib/document-service')
const EstateService = require('./lib/estate-service')
const FileService = require('./lib/file-service')
const MyCasesService = require('./lib/mycases-service')
const ProjectService = require('./lib/project-service')
const UserService = require('./lib/user-service')

module.exports = options => {
  if (!options) throw TypeError('Missing required input: options')
  if (!options.host) throw TypeError('Missing required input: options.host')
  if (!options.authkey) throw TypeError('Missing required input: options.authkey')

  return {
    AccessGroupService: AccessGroupService(options),
    CaseService: CaseService(options),
    ContactService: ContactService(options),
    DocumentService: DocumentService(options),
    EstateService: EstateService(options),
    FileService: FileService(options),
    MyCasesService: MyCasesService(options),
    ProjectService: ProjectService(options),
    UserService: UserService(options)
  }
}
