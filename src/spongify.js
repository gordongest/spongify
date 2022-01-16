"use strict";
exports.__esModule = true;
exports.spongify = void 0;
var spongify = function (str, step) {
    if (step === void 0) { step = 5; }
    var letters = str.toLowerCase().split('');
    for (var i = 1; i < letters.length - (step - 1); i++) {
        var randomInt = Math.floor(Math.random() * step);
        letters[i + randomInt] = letters[i + randomInt].toUpperCase();
    }
    return letters.join('');
};
exports.spongify = spongify;
