module.exports = function (defaultNope) {
  return function (val, yep, nope) {
    if (Array.isArray(val) || (typeof val === 'object' && val.forEach != null)) {
      let result = []

      val.forEach(function (val, key) {
        result.push(typeof yep === 'function' ? yep(val, key) : yep)
      })

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
