import { ListNode, mergeTwoLists } from './21-merge-2-sorted-lists'

const l1_1 = new ListNode(1, new ListNode(2, new ListNode(5)))
const l1_2 = new ListNode(1, new ListNode(3, new ListNode(4)))

const merged1 = new ListNode(
  1,
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
  ),
)

const l2_1 = null
const l2_2 = null
const merged2 = null

const l3_1 = null
const l3_2 = new ListNode(0)
const merged3 = new ListNode(0)

describe('it should return merged node list', () => {
  test('should return result1', () => {
    expect(mergeTwoLists(l1_1, l1_2)).toEqual(merged1)
    expect(mergeTwoLists(l3_1, l3_2)).toEqual(merged3)
    expect(mergeTwoLists(l2_1, l2_2)).toEqual(merged2)
  })
})
