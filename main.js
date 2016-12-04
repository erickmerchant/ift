module.exports = function (defaultNope) {
  return function (condition, yep, nope) {
    var result = condition ? yep : (nope != null ? nope : defaultNope)

    if (typeof result === 'function') {
      result = result()
    }

    return result
  }
}
