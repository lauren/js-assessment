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
        var result = [];
        var applyFn = function (value) {
            return function () {
                return fn(value);
            }
        }
        for (var i = 0; i < arr.length; i++) {
            result[i] = applyFn(arr[i]);
        }
        return result;
    },

    partial : function (fn, str1, str2) {
        return function(str3) {
            return fn.call(this, str1, str2, str3);
        };
    },

    useArguments : function () {
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
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
