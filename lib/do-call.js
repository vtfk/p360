const axios = require('axios')

module.exports = async options => {
  const { host, service, operation, authkey, query } = options
  const baseUrl = /^(http|https):\/\//.exec(host) ? host : `https://${host}`
  const url = `${baseUrl}/Biz/v2/api/call/SI.Data.RPC/SI.Data.RPC/${service}/${operation}?authkey=${authkey}`
  const { data } = await axios.post(url, query)
  return data
}
