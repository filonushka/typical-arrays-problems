exports.min = function min(array) {
    if (Array.isArray(array) === true && array.length !== 0) {
        var min = Math.min.apply(null, array);
        return min;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (Array.isArray(array) === true && array.length !== 0) {
        var max = Math.max.apply(null, array);
        return max;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (Array.isArray(array) === true && array.length !== 0) {
        var avg = array.reduce((a, b) => a + b, 0) / array.length;
        return avg;
    } else {
        return 0;
    }
};
