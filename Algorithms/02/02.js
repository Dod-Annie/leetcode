// Source :https://leetcode-cn.com/problems/add-two-numbers/description/
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
var addTwoNumbers = function (l1, l2) {
  var answer
  var init = true
  var carry = 0
  var head
  var node = new ListNode()
  do {
    if (l1 == null) l1 = new ListNode(0)
    if (l2 == null) l2 = new ListNode(0)
    var sum = l1.val + l2.val + carry
    var num = 0
    if (sum >= 10) {
      num = sum - 10
      carry = 1
    } else {
      num = sum
      carry = 0
    }

    if (init) {
      node = new ListNode(num)
      answer = head = node
    } else {
      node = new ListNode(num)
      head.next = node
      head = head.next
    }


    init = false
    l1 = l1.next
    l2 = l2.next

    if (carry > 0 && l1 === null && l2 === null) {
      node = new ListNode(carry)
      head.next = node
      head = head.next
    }

  }
  while (l1 || l2)

  return answer
};