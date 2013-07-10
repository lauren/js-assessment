if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function (data, dirName) {
    	// var result = [];
    	// var findFiles = function (thisData) {
    	// 	var firstFile,
    	// 		remainingFiles;
    	// 	console.log(thisData);
    	// 	if (thisData.length === 0) {
    	// 		console.log(result);
    	// 		return result;
    	// 	} else if (thisData.length === 1) {
    	// 		if (typeof thisData[0] === "string") {
    	// 			result.push(thisData[0]);
    	// 		} else {
    	// 			result.concat(findFiles(thisData[0].files));
    	// 		}
    	// 	} else {
    	// 		first = thisData[0];
    	// 		remaining = thisData.slice(1,thisData.length);
    	// 		console.log(thisData);
    	// 		console.log(remaining);
    	// 		if (typeof first === "string") {
    	// 			result.concat([first], findFiles(remainingFiles));
    	// 		} else {
    	// 			result.concat(findFiles(first.files), findFiles(remaining));
    	// 		}
    	// 	}
    	// 	console.log(result);
    	// 	return result;
    	// }
    	// return findFiles([data]);
    },

    permute: function (arr) {

    }
  };
});
