const axios = require('axios')

const maxBodyLength = 99000000 // maxBodyLength is 10 MB as default from follow-redirects - overriding to 99 MB (Azure function has limit of 100 MB)

module.exports = async options => {
  const { host, service, operation, authkey, query } = options
  const baseUrl = /^(http|https):\/\//.exec(host) ? host : `https://${host}`
  const url = `${baseUrl}/Biz/v2/api/call/SI.Data.RPC/SI.Data.RPC/${service}/${operation}?authkey=${authkey}`
  const { data } = await axios.post(url, query, { maxBodyLength })
  return data
}
