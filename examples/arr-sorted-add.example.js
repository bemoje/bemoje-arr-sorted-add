import arrSortedAdd from '../src/arr-sorted-add'

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
