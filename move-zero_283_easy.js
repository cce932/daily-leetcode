var moveZeroes = function(nums) {
    let anchor = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[anchor];
            nums[anchor] = temp;
            
            anchor++;
        }
    }
};
