# p360

Node wrapper for Public 360 SIF RPC Web Service from [Tieto](https://www.tieto.no/).

# Installation

```bash
$ npm install @vtfk/p360 --save
```

## SIF documentation

SI Integration Framework (SIF) is public 360s RPC-webservice.

For a full list of calls and callbacks see the documentation  [here](https://github.com/telemark/skoleskyss-arbeid/blob/master/biztalk/GenericWebServiceLayer.pdf)

## Usage

```JavaScript
(async () => {
  const p360 = require('@vtfk/p360')

  const options = {
    instanceUrl: 'server.domain.no',
    accesKey: 'your-rpc-access-key'
  }
  try {
    const client = p360(options)
    const contactService = client.ContactService
    const result  = await contactService.GetContactPersons({ parameter: { Name: 'Maccyber%' } })
    console.log(JSON.stringify(result, null, 2))
  } catch (error) {
    console.error(error)
  }
})()
```

# License

[MIT](LICENSE)
