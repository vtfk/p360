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
    host: 'server.domain.no',
    authKey: 'your-rpc-auth-key'
  }
  try {
    const client = p360(options)
    const { ContactService } = client
    const result  = await contactService.GetContactPersons({ parameter: { Name: 'Maccyber%' } })
    console.log(JSON.stringify(result, null, 2))
  } catch (error) {
    console.error(error)
  }
})()
```

# License

[MIT](LICENSE)
