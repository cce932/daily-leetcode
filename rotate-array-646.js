var rotate = function(nums, k) {
	k %= nums.length;

	reverse(nums, 0, nums.length-1);
	reverse(nums, 0, k-1);
	reverse(nums, k, nums.length-1);
};

const reverse = function(array, start, end) {
	while(start<end) {
		const temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		
		start++;
		end--
	}
}