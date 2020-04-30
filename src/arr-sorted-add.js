import arrSortComparator from '@bemoje/arr-sort-comparator'
import arrSortedInsertionIndex from '@bemoje/arr-sorted-insertion-index'
import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * For a sorted array, add an element. Whichever comparator function was used to sort the array, can be passed. Also supports comparator-builder options. For reference, see: https://github.com/bemoje/bemoje-arr-sort-comparator
 * @param {Array} arr - The array
 * @param {*} element - The element for which to find its insertion index
 * @param {function|object} [compare]
 * @param {boolean} [compare.numeric=false] - Sort numerically. Defaults to lexicographic/alphabetic sort.
 * @param {boolean} [compare.descending=false] - Sort in descending order. Defaults to ascending order.
 * @param {boolean} [compare.array=false] - Sort arrays. Nested arrays are also compared recursively.
 * @param {number|string|getter} [compare.by=undefined] - Sort by either array index, a callback(element): any - or by object keys with dot-notation support.
 * @param {boolean} [duplicates=true] - Whether to add the element if a duplicate element exists.
 * @returns {Array} The sorted array
 */
export default function arrSortedAdd(arr, element, compare, duplicates = true) {
	assertArgs(arr, element)
	assertType(Array, arr)

	const len = arr.length

	// for empty array, add element and return
	if (len === 0) {
		arr.push(element)
		return arr
	}

	// handle comparator
	if (compare) {
		if (typeof compare === 'object') {
			// is comparator builder options
			compare = arrSortComparator(compare)
		}
	} else {
		// set default comparator
		compare = arrSortComparator()
	}

	// get index at which to insert the new element
	const pos = arrSortedInsertionIndex(arr, element, compare)

	console.log(pos - 1)

	// dont add if exists
	if (
		!duplicates &&
		(compare(arr[pos], element) === 0 ||
			compare(arr[pos + 1], element) === 0 ||
			compare(arr[pos - 1], element) === 0)
	) {
		return arr
	}

	// increase array size.
	arr.push(element)

	// if last item, then we're already done
	if (pos === len) {
		return arr
	}

	let i = len

	// Reposition all elements after insertion position. Faster than swapping.
	while (i > pos) {
		arr[i] = arr[--i]
	}

	// set new element at its correct position.
	arr[pos] = element

	// return
	return arr
}

/**
 * Callback type definition.
 * @callback getter
 * @param {*} a - The value
 * @returns {*} The value to be compared
 */
