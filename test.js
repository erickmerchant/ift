const test = require('tape')
const main = require('./main')

test('test default', function (t) {
  const symbol = Symbol()
  const ift = main(symbol)

  t.plan(1)

  t.equals(ift(false, Symbol()), symbol)
})

test('test no default', function (t) {
  const ift = main()

  t.plan(1)

  t.equals(ift(false, Symbol()), undefined)
})

test('test yep', function (t) {
  const ift = main()
  const symbol = Symbol()

  t.plan(1)

  t.equals(ift(true, symbol), symbol)
})

test('test nope', function (t) {
  const ift = main()
  const symbol = Symbol()

  t.plan(1)

  t.equals(ift(false, null, symbol), symbol)
})

test('test functions', function (t) {
  const ift = main()
  const symbol = Symbol()

  t.plan(1)

  t.equals(ift(true, () => symbol), symbol)
})
