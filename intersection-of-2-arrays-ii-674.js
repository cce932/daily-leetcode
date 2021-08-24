var intersect = function(nums1, nums2) {
    let record = {};
    let result = [];
    
    for (let i=0; i<nums1.length; i++) {
        let num = nums1[i]
        record[num] ? record[num]++ : record[num]=1;
    }
    
    for (let i=0; i<nums2.length; i++) {
        let num = nums2[i]
        if (record[num]>0) {
            result.push(num);
            record[num]--;
        }
    }
    
    return result;
};