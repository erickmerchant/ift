# @erickmerchant/ift

A ternary function with a default else

``` javascript
// using values
const ift1 = require('@erickmerchant/ift')('default case')

ift1(true, 'yes case')
// 'yes case'

ift1(false, 'yes case')
// 'default case'

ift1(false, 'yes case', 'no case')
// 'no case'

// using functions
const ift2 = require('@erickmerchant/ift')(() => 'default case')

ift2(true, () => 'yes case')
// 'yes case'

ift2(false, () => 'yes case')
// 'default case'

ift2(false, () => 'yes case', () => 'no case')
// 'no case'
```
