# @bemoje/arr-sorted-add

For a sorted array, add an element. Whichever comparator function was used to sort the array, can be passed. Also supports comparator-builder options. For reference, see: https://github.com/bemoje/bemoje-arr-sort-comparator

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-sorted-add" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-sorted-add" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-sorted-add" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-sorted-add.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-sorted-add" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-sorted-add.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-sorted-add" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-sorted-add" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-sorted-add/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-sorted-add" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-sorted-add
npm install --save @bemoje/arr-sorted-add
npm install --save-dev @bemoje/arr-sorted-add
```

## Usage

```javascript

import arrSortedAdd from '@bemoje/arr-sorted-add'

/**
 * ADD ELEMENT TO SORTED ARRAY
 * Defaults to alphabetically
 */

const alpha = ['a', 'c', 'd']

arrSortedAdd(alpha, 'b')
//=> ['a', 'b', 'c', 'd']

arrSortedAdd(alpha, 'a')
//=> ['a', 'a', 'b', 'c', 'd']

arrSortedAdd(alpha, 'e')
//=> ['a', 'a', 'b', 'c', 'd', 'e']

arrSortedAdd(alpha, '_')
//=> ['_', 'a', 'a', 'b', 'c', 'd', 'e']

/**
 * ADD NUMERICAL VALUES
 */

const numeric = [0, 4, 6]

arrSortedAdd(numeric, 1, {
  numeric: true,
})
//=> [0, 1, 4, 6]

arrSortedAdd(numeric, 5, {
  numeric: true,
})
//=> [0, 1, 4, 5, 6]

arrSortedAdd(numeric, 7, {
  numeric: true,
})
//=> [0, 1, 4, 5, 6, 7]

arrSortedAdd(numeric, 3, {
  numeric: true,
})
//=> [0, 1, 3, 4, 5, 6, 7]

/**
 * To see more examples of using the comparator builder, visit:
 *  https://github.com/bemoje/bemoje-arr-sort-comparator
 */

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [arrSortedAdd][1]

    -   [Parameters][2]

-   [getter][3]

    -   [Parameters][4]

## arrSortedAdd

For a sorted array, add an element. Whichever comparator function was used to sort the array, can be passed. Also supports comparator-builder options. For reference, see: [https://github.com/bemoje/bemoje-arr-sort-comparator][5]

##### Parameters

-   `arr` **[Array][6]** The array

-   `element` **any** The element for which to find its insertion index

-   `compare` **([function][7] \| [object][8])?** 

    -   `compare.numeric` **[boolean][9]** Sort numerically. Defaults to lexicographic/alphabetic sort. (optional, default `false`)

    -   `compare.descending` **[boolean][9]** Sort in descending order. Defaults to ascending order. (optional, default `false`)

    -   `compare.array` **[boolean][9]** Sort arrays. Nested arrays are also compared recursively. (optional, default `false`)

    -   `compare.by` **([number][10] \| [string][11] \| [getter][12])** Sort by either array index, a callback(element): any - or by object keys with dot-notation support. (optional, default `undefined`)

Returns **[Array][6]** The sorted array

## getter

Callback type definition.

Type: [Function][7]

##### Parameters

-   `a` **any** The value

Returns **any** The value to be compared

[1]: #arrsortedadd

[2]: #parameters

[3]: #getter

[4]: #parameters-1

[5]: https://github.com/bemoje/bemoje-arr-sort-comparator

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[12]: #getter