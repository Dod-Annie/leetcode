// Source :https://leetcode-cn.com/problems/remove-element/description/
// Author : Dod_Annie

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0
  if (nums.length === 1) {
    if (nums[0] === val) {
      return 0
    } else {
      return 1
    }
  }
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] === val) {
      if (nums[j] !== val) {
        nums[i] = nums[j]
        nums[j] = val
        i++
      }
    } else {
      i++
    }
  }
  return i
};