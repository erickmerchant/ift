# @erickmerchant/ift

A ternary function with a default

``` javascript
// using values
const ift1 = require('@erickmerchant/ift')('default case')

ift1(true, 'yes case')
// 'yes case'

ift1(false, null)
// 'default case'

ift1(false, null, 'no case')
// 'no case'

// using functions
const ift2 = require('@erickmerchant/ift')(() => 'default case')

ift2(true, () => 'yes case')
// 'yes case'

ift2(false, null)
// 'default case'

ift2(false, null, () => 'no case')
// 'no case'
```
