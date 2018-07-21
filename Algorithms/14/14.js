// Source :https://leetcode-cn.com/problems/longest-common-prefix/description/
// Author : Dod_Annie

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0 || strs[0].length === 0) return ""
  let ans = ""
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((item) => {
      return item.slice(0, i + 1) === strs[0].slice(0, i + 1)
    })) {
      ans += strs[0][i]
    }
    else {
      return ans
    }
  }
  return ans
};