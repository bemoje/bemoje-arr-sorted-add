(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-sorted-insertion-index'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-sorted-insertion-index', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-sorted-add'] = factory(global.arrSortedInsertionIndex, global.assertArgs, global.assertType));
}(this, (function (arrSortedInsertionIndex, assertArgs, assertType) { 'use strict';

	arrSortedInsertionIndex = arrSortedInsertionIndex && Object.prototype.hasOwnProperty.call(arrSortedInsertionIndex, 'default') ? arrSortedInsertionIndex['default'] : arrSortedInsertionIndex;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * For a sorted array, add an element. Whichever comparator function was used to sort the array, can be passed. Also supports comparator-builder options. For reference, see: https://github.com/bemoje/bemoje-arr-sort-comparator
	 * @param {Array} arr - The array
	 * @param {*} element - The element for which to find its insertion index
	 * @param {function|object} [compare]
	 * @param {boolean} [compare.numeric=false] - Sort numerically. Defaults to lexicographic/alphabetic sort.
	 * @param {boolean} [compare.descending=false] - Sort in descending order. Defaults to ascending order.
	 * @param {boolean} [compare.array=false] - Sort arrays. Nested arrays are also compared recursively.
	 * @param {number|string|getter} [compare.by=undefined] - Sort by either array index, a callback(element): any - or by object keys with dot-notation support.
	 * @returns {Array} The sorted array
	 */
	function arrSortedAdd(arr, element, compare) {
		assertArgs(arr, element);
		assertType(Array, arr);

		const len = arr.length;

		// for empty array, add element and return
		if (len === 0) {
			arr.push(element);
			return arr
		}

		// get index at which to insert the new element
		const pos = arrSortedInsertionIndex(arr, element, compare);

		// increase array size.
		arr.push(element);

		// if last item, then we're already done
		if (pos === len) {
			return arr
		}

		let i = len;

		// Reposition all elements after insertion position. Faster than swapping.
		while (i > pos) {
			arr[i] = arr[--i];
		}

		// set new element at its correct position.
		arr[pos] = element;

		// return
		return arr
	}

	/**
	 * Callback type definition.
	 * @callback getter
	 * @param {*} a - The value
	 * @returns {*} The value to be compared
	 */

	return arrSortedAdd;

})));
