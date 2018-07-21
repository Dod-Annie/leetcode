// https://leetcode-cn.com/problems/search-insert-position/description/
// Author : Dod_Annie

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target)
  } else {
    return nums.filter(i => i < target).length
  }
};