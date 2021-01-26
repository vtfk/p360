const test = require('ava')
const p360 = require('../index')

test('it requires an options object', t => {
  const error = t.throws(() => {
    p360()
  })

  t.is(error.name, 'TypeError')
  t.is(error.message, 'Missing required input: options')
})

test('it requires options.host to exist', t => {
  const error = t.throws(() => {
    p360({
      host: false,
      authkey: true
    })
  })

  t.is(error.name, 'TypeError')
  t.is(error.message, 'Missing required input: options.host')
})

test('it requires options.authKey to exist', t => {
  const error = t.throws(() => {
    p360({
      host: true,
      authkey: false
    })
  })

  t.is(error.name, 'TypeError')
  t.is(error.message, 'Missing required input: options.authkey')
})
