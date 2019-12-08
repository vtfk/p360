const test = require('ava')
const p360 = require('../index')

test('it requires an options object', t => {
  const error = t.throws(() => {
    p360()
  }, TypeError)

  t.is(error.message, 'Missing required input: options')
})

test('it requires options.host to exist', t => {
  const error = t.throws(() => {
    p360({
      host: false,
      authKey: true
    })
  }, TypeError)

  t.is(error.message, 'Missing required input: options.host')
})

test('it requires options.authKey to exist', t => {
  const error = t.throws(() => {
    p360({
      host: true,
      authKey: false
    })
  }, TypeError)

  t.is(error.message, 'Missing required input: options.authKey')
})
