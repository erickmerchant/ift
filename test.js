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

test('test iterable array', function (t) {
  const ift = main()

  t.plan(1)

  t.deepEquals(ift([1, 2, 3], (i) => i * 2), [2, 4, 6])
})

test('test iterable map', function (t) {
  const ift = main()

  t.plan(1)

  t.deepEquals(ift(new Map([['a', 1], ['b', 2]]), (i) => i), [['a', 1], ['b', 2]])
})

test('test iterable set', function (t) {
  const ift = main()

  t.plan(1)

  t.deepEquals(ift(new Set(['a', 'b']), (i) => i), ['a', 'b'])
})

test('test iterators non-function', function (t) {
  const symbol = Symbol()
  const ift = main()

  t.plan(1)

  t.deepEquals(ift([1, 2, 3], symbol), [symbol, symbol, symbol])
})

test('test iterators zero length', function (t) {
  const symbol = Symbol()
  const ift = main(symbol)

  t.plan(1)

  t.equals(ift([], (i) => i * 2), symbol)
})
