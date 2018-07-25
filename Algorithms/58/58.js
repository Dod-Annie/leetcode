// https://leetcode-cn.com/problems/length-of-last-word/description/
// Author : Dod_Annie

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  let location = s.lastIndexOf(' ')
  if (s.replace(" ", "").length === 0) return 0
  if (location == -1) return s.length
  else return s.length - location - 1
};