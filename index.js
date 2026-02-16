const AccessGroupService = require("./lib/accessgroup-service");
const ActivityService = require("./lib/activity-service");
const CaseService = require("./lib/case-service");
const ContactService = require("./lib/contact-service");
const DocumentService = require("./lib/document-service");
const EstateService = require("./lib/estate-service");
const FileService = require("./lib/file-service");
const MyCasesService = require("./lib/mycases-service");
const ProjectService = require("./lib/project-service");
const RevisionService = require("./lib/revision-service");
const SupportService = require("./lib/support-service");
const UserService = require("./lib/user-service");

const KGVService = require("./lib/kgv-service");
const ContikiService = require("./lib/contiki-service");

module.exports = (options) => {
  if (!options) throw TypeError("Missing required input: options");
  if (!options.host) throw TypeError("Missing required input: options.host");
  if (!options.authkey)
    throw TypeError("Missing required input: options.authkey");

  return {
    AccessGroupService: AccessGroupService(options),
    ActivityService: ActivityService(options),
    CaseService: CaseService(options),
    ContactService: ContactService(options),
    DocumentService: DocumentService(options),
    EstateService: EstateService(options),
    FileService: FileService(options),
    MyCasesService: MyCasesService(options),
    ProjectService: ProjectService(options),
    RevisionService: RevisionService(options),
    SupportService: SupportService(options),
    UserService: UserService(options),
    KGVService: KGVService(options),
    ContikiService: ContikiService(options),
  };
};
