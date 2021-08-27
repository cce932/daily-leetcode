var removeDuplicates = function(nums) {
    let result = 0; // the length for the increasing array
    for (i=1; i<nums.length; i++) {
      if (nums[i]>nums[result]) {
          nums[++result] = nums[i];
      }
    }
    
    return ++result;
};