const test = require('ava')
const { dependencies, devDependencies } = require('../package.json')
const dropModules = []
const isDropped = module => !dropModules.includes(module)

test('ava works ok', t => {
  t.true(true)
})

if (dependencies) {
  Object.keys(dependencies).forEach(dependency => {
    test(`${dependency} loads ok`, t => {
      const module = require(dependency)
      t.truthy(module)
    })
  })
}

if (devDependencies) {
  Object.keys(devDependencies).filter(isDropped).forEach(dependency => {
    test(`${dependency} loads ok`, t => {
      const module = require(dependency)
      t.truthy(module)
    })
  })
}
