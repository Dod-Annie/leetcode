// https://leetcode-cn.com/problems/implement-strstr/description/
// Author : Dod_Annie

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0
  return haystack.indexOf(needle)
};