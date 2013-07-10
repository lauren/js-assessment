if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    indexOf : function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum : function (arr) {
        return arr.reduce(function (a, b) {
            return a + b;
        });
    },

    remove : function (arr, item) {
        return arr.filter(function (element) {
            return (element != item);
        });
    },

    removeWithoutCopy : function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i,1);
                i--;
            }
        }
        return arr;
    },

    append : function (arr, item) {
        return arr.concat([item]);
    },

    truncate : function (arr) {
        arr.pop();
        return arr;
    },

    prepend : function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function (arr) {
        arr.shift();
        return arr;
    },

    concat : function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function (arr, item) {
        return arr.reduce(function (a, b) {
            return (a === item) ? b + 1 : b;
        });
    },

    duplicates : function (arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if ((arr.slice(i+1, arr.length).indexOf(arr[i]) > -1) && result.indexOf(arr[i]) === -1) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    square : function (arr) {
        return arr.map(function (item) {
            return item * item;
        });
    },

    findAllOccurrences : function (arr, target) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                result.push(i);
            }
        }
        return result;
    }
  };
});
