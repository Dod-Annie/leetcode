// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
// Author : Dod_Annie

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let node = head
  if (node === null) return node
  while (node.next !== null) {
    let child = node.next
    if (node.val === child.val) {
      node.next = child.next
    } else {
      node = node.next
      child = child.next
    }
  }
  return head
};