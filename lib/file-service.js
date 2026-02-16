const doCall = require("./do-call");
const service = "FileService";

module.exports = (options) => {
  return {
    Upload(query) {
      return doCall({ ...options, service, query, operation: "Upload" });
    },
    CheckOutAndGetFileForExternalControl(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "CheckOutAndGetFileForExternalControl",
      });
    },
    GetFilesWithMetadata(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "GetFilesWithMetadata",
      });
    },
    CreateFileVariant(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "CreateFileVariant",
      });
    },
    UploadStream(query) {
      return doCall({ ...options, service, query, operation: "UploadStream" });
    },
    UploadAndCheckInFileFromExternalControl(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "UploadAndCheckInFileFromExternalControl",
      });
    },
    UploadAndCheckInFileFromExternalControl(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "UploadAndCheckInFileFromExternalControl",
      });
    },

    GetFileWithMetadata(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "GetFileWithMetadata",
      });
    },
    GetFile(query) {
      return doCall({ ...options, service, query, operation: "GetFile" });
    },
    CreateFile(query) {
      return doCall({ ...options, service, query, operation: "CreateFile" });
    },
    UpdateFile(query) {
      return doCall({ ...options, service, query, operation: "UpdateFile" });
    },
    DeleteFile(query) {
      return doCall({ ...options, service, query, operation: "DeleteFile" });
    },
    Ping(query) {
      return doCall({ ...options, service, query, operation: "Ping" });
    },
  };
};
