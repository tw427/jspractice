let allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});


function all(arr, callback) {
    let copy = arr.slice();

    if(copy.length == 0) {
      return true;
    }

    if(callback(copy[0])) {
      copy.shift();
      return all(copy, callback);
    } else {
      return false;
    }
}