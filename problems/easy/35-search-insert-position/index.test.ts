import { searchInsert, searchInsert2 } from './'

const nums = [1, 3, 5, 6],
  target1 = 5,
  target2 = 2,
  target3 = 7

it('shall pass', () => {
  expect(searchInsert(nums, target1)).toBe(2)
  expect(searchInsert2(nums, target1)).toBe(2)

  expect(searchInsert(nums, target2)).toBe(1)
  expect(searchInsert2(nums, target2)).toBe(1)

  expect(searchInsert(nums, target3)).toBe(4)
  expect(searchInsert2(nums, target3)).toBe(4)
})
