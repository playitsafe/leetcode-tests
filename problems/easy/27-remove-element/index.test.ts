import { removeElement } from './'

const nums1 = [3, 2, 2, 3]
const val1 = 3

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
const val2 = 2

it('should return removed element', () => {
  const res1 = removeElement(nums1, val1)
  expect(res1).toBe(2)
  expect(nums1).toEqual([2, 2, 2, 3])

  const res2 = removeElement(nums2, val2)
  expect(nums2).toEqual([0, 1, 3, 0, 4, 0, 4, 2])
  expect(res2).toBe(5)
})
