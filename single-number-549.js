var singleNumber = function(nums) {
  return nums.reduce((arr, num) => arr^=num);
};