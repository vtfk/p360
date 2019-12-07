const axios = require('axios')

module.exports = async options => {
  const { host, service, operation, authkey, query } = options
  const url = `https://${host}/Biz/v2/api/call/SI.Data.RPC/SI.Data.RPC/${service}/${operation}?authkey=${authkey}`
  const { data } = await axios.post(url, query)
  return data
}
