// https://leetcode.com/problems/merge-two-sorted-lists/
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    // create dummy list to keep track on node
    // traverse through each list 1 & 2
    // check if lower
    // point dummy node to lower list 1 or 2 node
    // O(n):T O(1):S

const dummy = new ListNode(-Infinity)
let prev = dummy
while (list1 && list2) {
    if (list1.val <= list2.val) {
        prev.next = list1
        prev = list1
        list1 = list1.next
    } else {
        prev.next = list2
        prev = list2
        list2 = list2.next
    }
}
if(!list1) {prev.next = list2}
if(!list2) {prev.next = list1}

return dummy.next
};