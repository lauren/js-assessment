if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    argsAsArray : function (fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function (fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function (str) {
        return function (str2) {
            return str + ", " + str2;
        }
    },

    makeClosures : function (arr, fn) {
        return arr.map(function (item) {
            return function () {
                return fn(item);
            }
        });
    },

    partial : function (fn, str1, str2) {
        return function(str3) {
            return fn.call(this, str1, str2, str3);
        };
    },

    useArguments : function () {
        return Array.prototype.slice.call(arguments).reduce(function (a, b) {
            return a + b;
        });
    },

    callIt : function (fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(this, args);
    },

    partialUsingArguments : function (fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function () {
            var newArgs = Array.prototype.slice.call(arguments);
            return fn.apply(this, args.concat(newArgs));
        }
    },

    curryIt : function (fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);

        var getArguments = function (theseArguments) {
            return function (newArgument) {
                theseArguments.push(newArgument);
                
                if (theseArguments.length === fn.length) {
                    return fn.apply(this, theseArguments);
                } else {
                    return getArguments(theseArguments);
                }
            }
        }

        return getArguments(args);  
    }
  };
});
