const doCall = require("./do-call");
const service = "SupportService";

module.exports = (options) => {
  return {
    GetSIFVersion(query) {
      return doCall({ ...options, service, query, operation: "GetSIFVersion" });
    },

    Ping(query) {
      return doCall({ ...options, service, query, operation: "Ping" });
    },
    DownloadDocumentTemplate(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "DownloadDocumentTemplate",
      });
    },
    DeleteExternalId(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "DeleteExternalId",
      });
    },
    GetCodeTableRows(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "GetCodeTableRows",
      });
    },
    GetLogs(query) {
      return doCall({ ...options, service, query, operation: "GetLogs" });
    },
    GetEvents(query) {
      return doCall({ ...options, service, query, operation: "GetEvents" });
    },
    CreateLog(query) {
      return doCall({ ...options, service, query, operation: "CreateLog" });
    },
    GenerateJsonClient(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "GenerateJsonClient",
      });
    },
    GetClassifications(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "GetClassifications",
      });
    },
    BulkImportSync(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "BulkImportSync",
      });
    },
    BulkImportAsync(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "BulkImportAsync",
      });
    },
    AddCodeTableRow(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "AddCodeTableRow",
      });
    },
    UpdateCodeTableRow(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "UpdateCodeTableRow",
      });
    },
    GetEntitiesExternalIds(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "GetEntitiesExternalIds",
      });
    },
    AddExternalId(query) {
      return doCall({ ...options, service, query, operation: "AddExternalId" });
    },
    GetTempEntityStorageText(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "GetTempEntityStorageText",
      });
    },
    AddTempEntityStorageText(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "AddTempEntityStorageText",
      });
    },
    DeleteTempEntityStorageText(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "DeleteTempEntityStorageText",
      });
    },
    GetSwaggerOpenAPIServiceDefinition(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "GetSwaggerOpenAPIServiceDefinition",
      });
    },
    SetupMQ(query) {
      return doCall({ ...options, service, query, operation: "SetupMQ" });
    },
    ManageQueue(query) {
      return doCall({ ...options, service, query, operation: "ManageQueue" });
    },
    WaitForEvents(query) {
      return doCall({ ...options, service, query, operation: "WaitForEvents" });
    },
  };
};
