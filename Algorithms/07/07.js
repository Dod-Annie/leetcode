// Source :https://leetcode-cn.com/problems/reverse-integer/description/
// Author : Dod_Annie

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let arr = [...x.toString()].reverse()
  let s = parseInt(arr.join(''))
  if (x < 0) s = -s
  return s > Math.pow(2, 31) - 1 || s < -Math.pow(2, 31) ? 0 : s;
};