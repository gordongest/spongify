"use strict";
exports.__esModule = true;
exports.spongify = exports.spongifyOld = void 0;
var spongifyOld = function (str, step) {
    if (step === void 0) { step = 4; }
    var letters = str.toLowerCase().replace(/l/ig, 'L').split('');
    for (var i = 0; i < letters.length - (step - 1); i++) {
        var randomInt = Math.floor(Math.random() * step);
        if (letters[i + randomInt] !== 'i') {
            letters[i + randomInt] = letters[i + randomInt].toUpperCase();
        }
    }
    return letters.join('');
};
exports.spongifyOld = spongifyOld;
// lowercase string, uppercase all 'L', split into array
// limit number of capitalizations
// multiply the length of the array by .66, round up
// declare accumulator, set to 0
// while accumulator is less than limit, keep changing case
// declare and floor random index with maximum of array length
// if not 'i', change case in array at random index
// when case changed, increment accumulator
// re-join and return string
var spongify = function (str, rate) {
    if (rate === void 0) { rate = .66; }
    var letters = str.toLowerCase().replace(/l/ig, 'L').split('');
    var limit = Math.ceil(letters.length * rate);
    var accumulator = 0;
    while (accumulator < limit) {
        var randomIndex = Math.floor(Math.random() * letters.length);
        if (letters[randomIndex] !== 'i') {
            letters[randomIndex] = letters[randomIndex].toUpperCase();
            accumulator++;
        }
    }
    return letters.join('');
};
exports.spongify = spongify;
