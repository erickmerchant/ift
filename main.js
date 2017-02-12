module.exports = function (defaultNope) {
  return function (val, yep, nope) {
    let result

    if (typeof val === 'object' && val[Symbol.iterator] != null) {
      result = []

      for (let item of val) {
        result.push(typeof yep === 'function' ? yep(item) : yep)
      }

      val = result.length > 0

      yep = result
    }

    result = val ? yep : (nope != null ? nope : defaultNope)

    if (typeof result === 'function') {
      result = result()
    }

    return result
  }
}
