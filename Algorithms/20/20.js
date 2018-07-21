// Source :https://leetcode-cn.com/problems/valid-parentheses/description/
// Author : Dod_Annie

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false
  do {
    var len = s.length
    s = s.replace(/\(\)/, "").replace(/\[\]/, "").replace(/\{\}/, "")
  } while (len > s.length)
  return (s.length > 0 ? false : true)
};