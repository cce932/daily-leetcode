var containsDuplicate = function(nums) {
	let map = new Map();
	    
	for (let num of nums) {
	    if (map.get(num) === true) {
	        return true;
	    }
	    
	    map.set(num, true);
	}
	
	return false;
}