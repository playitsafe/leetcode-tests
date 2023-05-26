https://leetcode.com/problems/merge-two-sorted-lists/description/

You are given the heads of two sorted linked lists list1 and list2.

Example:
Input: a: 5->10->15, b: 2->3->20
Output: 2->3->5->10->15->20

Input: a: 1->1, b: 2->4
Output: 1->1->2->4

Typescript representation:

```ts
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)

node1.next = node2
node2.next = node3
```

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
