// Source :https://leetcode-cn.com/problems/roman-to-integer/description/
// Author : Dod_Annie

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var list = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    let num = list[s[i]]
    let nextNum = list[s[i + 1]]
    if (nextNum && nextNum > num) {
      sum -= num
      continue
    }
    sum += num
  }
  return sum
};