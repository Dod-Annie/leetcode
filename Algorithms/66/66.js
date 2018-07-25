// https://leetcode-cn.com/problems/plus-one/description/
// Author : Dod_Annie

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let length = digits.length
  digits[length - 1] += 1
  for (let i = length - 1; i > 0; i--) {
    if (digits[i] === 10) {
      digits[i] = 0
      digits[i - 1] += 1
    }
  }
  if (digits[0] === 10) {
    digits = new Array(length + 1).fill(0)
    digits[0] = 1
  }

  return digits

};