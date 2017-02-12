# @erickmerchant/ift

A ternary function with a default case. It will iterate over iterables like arrays, maps, and sets.

``` javascript
// using values
const ift1 = require('@erickmerchant/ift')('default')

ift1(true, 'yes')
// 'yes'

ift1(false, 'yes')
// 'default'

ift1(false, 'yes', 'no')
// 'no'


// using functions
const ift2 = require('@erickmerchant/ift')()

ift2(true, () => 'yes')
// 'yes'


// iterables
const ift3 = require('@erickmerchant/ift')()

ift3([1, 2, 3], (i) => i * 2)
// [2, 4, 6]
```
