"use strict";
exports.__esModule = true;
exports.spongify = void 0;
var spongify = function (str, step) {
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
exports.spongify = spongify;
