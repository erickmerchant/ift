module.exports = function (defaultNope) {
  return function (val, yep, nope) {
    if (typeof val === 'object' && val[Symbol.iterator] != null) {
      let result = []

      for (let item of val) {
        result.push(typeof yep === 'function' ? yep(item) : yep)
      }

      val = result.length > 0

      yep = result
    }

    let result = val ? yep : (nope != null ? nope : defaultNope)

    if (typeof result === 'function') {
      result = result(val)
    }

    return result
  }
}
