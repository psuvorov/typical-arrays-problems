/**
 * 
 * @param {number[]}array
 * @returns {number}
 */
exports.min = function min (array) {
    if (!array || array.length === 0)
        return 0;
    
    let res = Number.MAX_VALUE;
    for (let v of array) {
        if (v < res)
            res = v;
    }    
    return res;
}

/**
 *
 * @param {number[]}array
 * @returns {number}
 */
exports.max = function max (array) {
    if (!array || array.length === 0)
        return 0;
    
    let res = Number.MIN_VALUE;
    for (let v of array) {
        if (v > res)
            res = v;
    }
    return res;
}

/**
 *
 * @param {number[]}array
 * @returns {number}
 */
exports.avg = function avg (array) {
    if (!array || array.length === 0)
        return 0;
        
    let sum = array.reduce((previousValue, currentValue) => previousValue + currentValue);
    return sum / array.length;    
}
