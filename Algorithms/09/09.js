// Source :https://leetcode-cn.com/problems/palindrome-number/description/
// Author : Dod_Annie

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  if (x === 0) return true
  if ((x % 10) === 0) return false
  let sum = 0
  let judge = x
  do {
    let num = judge % 10
    sum = sum * 10 + num
    judge = (judge - num) / 10
  } while (judge > 0.1)

  return sum === x
};