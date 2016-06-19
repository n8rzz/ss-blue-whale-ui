import _isArray from 'lodash/isArray';

/**
 * @property DEFAULT_OPTIONS
 * @type {Object}
 * @final
 */
const DEFAULT_OPTIONS = {
    KEY: 'id',
    VALUE: 'name'
};

// TODO: flesh out these two functions to make `reduceListToIdNameEnumeration` more defensive
// /**
//  *
//  * @function listItemHasKey
//  * @param  {Object} item
//  * @return {Boolean}
//  */
// function listItemHasKey(item, key) {
//     return true;
// }
//
// /**
//  *
//  * @function listItemHasValue
//  * @param  {Object} item
//  * @return {Boolean}
//  */
// function listItemHasValue(item, value) {
//     return true;
// }

/**
 * Utility to take a list of objects and return a single object.
 *
 * Used for building tcomb-form enums from a list of exisitng items.
 *
 * @function reduceListToIdNameEnumeration
 * @param {Array} listToReduce
 * @param {String} key
 * @param {String} value
 * @return {Object}
 */
export const reduceListToIdNameEnumeration = (
    listToReduce,
    key = DEFAULT_OPTIONS.KEY,
    value = DEFAULT_OPTIONS.VALUE
) => {
    if (!_isArray(listToReduce)) {
        throw new TypeError('Invalid parameter. Expected listToReduce to be an Array');
    }

    return listToReduce.reduce((sum, listItem) => {
        const listItemKey = listItem[key];
        const listItemValue = listItem[value];

        sum[listItemKey] = listItemValue;

        return sum;
    }, {});
};
