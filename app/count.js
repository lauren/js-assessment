if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
			var self = this,
					timeout;
			this.counter = function () {
				console.log(start++);
				if (start <= end) {
					timeout = setTimeout(function () {
						self.counter();
					},100);
				}
			};
			self.counter();
			return {
				cancel: function () {
					clearTimeout(timeout);
				}
			};
    }
  };
});