import { removeDuplicates } from './index'

const num1: number[] = [1, 1, 2]
const num2: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

test('should remove duplicates', () => {
  expect(removeDuplicates(num1)).toBe(2)
  expect(num1).toEqual([1, 2, 2])

  expect(removeDuplicates(num2)).toBe(5)
  expect(num2).toEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4])
})
