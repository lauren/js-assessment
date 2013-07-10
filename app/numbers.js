if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return 1 & num >> bit - 1;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var result = num.toString(2);
        while (result.length < 8) {
            result = "0" + result;
        }
        return result;
    },

    multiply: function(a, b) {
        var aPlaces = (a.toString(10).split(".")[1] || []).length,
            bPlaces = (b.toString(10).split(".")[1] || []).length,
            places = aPlaces > bPlaces ? aPlaces : bPlaces;
        return parseFloat((a*b).toPrecision(places),10);
    }
  };
});

