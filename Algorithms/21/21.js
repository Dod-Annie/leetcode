// Source :https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
// Author : Dod_Annie

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var ans = new ListNode(-1)
  var l3 = ans
  while (l1 && l2) {
    if (l1.val < l2.val) {
      l3.next = l1
      l1 = l1.next
    } else {
      l3.next = l2
      l2 = l2.next
    }
    l3 = l3.next
  }
  l3.next = l1 || l2
  return ans.next
};