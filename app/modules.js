if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
    	var Constructor = function (str1, str2) {
    		this.name = str2;
    		this.greeting = str1;
    		this.sayIt = function () {
    			return this.greeting + ", " + this.name;
    		}
    	}
    	return new Constructor(str1, str2);
    }
  };
});

