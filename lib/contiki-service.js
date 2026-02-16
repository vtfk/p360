const doCall = require("./do-call");
const service = "ContikiService";

module.exports = (options) => {
  return {
    Archive(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "Archive",
      });
    },
    ArchiveToCompanyCase(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "ArchiveToCompanyCase",
      });
    },
    Ping(query) {
      return doCall({ ...options, service, query, operation: "Ping" });
    },
  };
};
