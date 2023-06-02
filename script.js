const searchInsert = function(nums, target) {
  let indexForNum = 0;
  let exists = nums.indexOf(target);
  if (exists !== -1) {
    return exists;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      indexForNum = nums.indexOf(nums[i]);
      return indexForNum;
    } else {
      indexForNum++;
    }
  }
  return indexForNum;
};

// Test ----> Expected output = 4
console.log(searchInsert([11,23,24,36], 37));