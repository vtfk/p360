const doCall = require("./do-call");
const service = "KGVService";

module.exports = (options) => {
  return {
    CreateDocument(query) {
      return doCall({
        ...options,
        service,
        query,
        operation: "CreateDocument",
      });
    },
    CreateCase(query) {
      return doCall({ ...options, service, query, operation: "CreateCase" });
    },
    SearchCase(query) {
      return doCall({ ...options, service, query, operation: "SearchCase" });
    },

    Ping(query) {
      return doCall({ ...options, service, query, operation: "Ping" });
    },
  };
};
