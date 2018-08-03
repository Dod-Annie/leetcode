// https://leetcode-cn.com/problems/same-tree/description/
// Author : Dod_Annie

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false
  if (p.val !== q.val) return false
  else return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
};