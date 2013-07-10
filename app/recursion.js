if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function (data, dirName, directoryMatch) {
    	var findFilesInObj = function (thisObj, files, directoryMatch) {
    		var directoryMatch = directoryMatch || dirName && dirName === thisObj.dir;
    		if (thisObj.files) {
	    		return files.concat(findFilesInArray(thisObj.files, files, directoryMatch));
    		} else {
    			console.log(files);
    			return files;
    		}
    	};
    	var findFilesInArray = function (thisArray, files, directoryMatch) {
    		if (thisArray.length === 0) {
    			return files;
    		} else {
    			if (thisArray[0].files) {
    				return files.concat(findFilesInObj(thisArray[0], files, directoryMatch), findFilesInArray(thisArray.slice(1, thisArray.length), files, directoryMatch));
    			} else {
    				return (!dirName || directoryMatch) 
    					? files.concat([thisArray[0]], findFilesInArray(thisArray.slice(1, thisArray.length), files, directoryMatch))
    					: files.concat(findFilesInArray(thisArray.slice(1, thisArray.length), files, directoryMatch));
    			}
    		}
    	};
    	return findFilesInObj(data, []);
    },

    permute: function (arr) {

    }
  };
});