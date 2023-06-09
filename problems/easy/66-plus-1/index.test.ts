import { plusOne, plusOne1 } from './'

const arr1 = [1, 2, 3]
const arr2 = [4, 3, 2, 1]
const arr3 = [4, 3, 9, 9]
const arr4 = [9]
const arr5 = [9, 9, 9, 9]

it('toString approach shall pass', () => {
  expect(plusOne(arr1)).toEqual([1, 2, 4])
  expect(plusOne(arr2)).toEqual([4, 3, 2, 2])
  expect(plusOne(arr3)).toEqual([4, 4, 0, 0])
  expect(plusOne(arr4)).toEqual([1, 0])
  expect(plusOne(arr5)).toEqual([1, 0, 0, 0, 0])
})

it('recursive pop approach shall pass', () => {
  expect(plusOne1(arr1)).toEqual([1, 2, 4])
  expect(plusOne1(arr2)).toEqual([4, 3, 2, 2])
  expect(plusOne1(arr3)).toEqual([4, 4, 0, 0])
  expect(plusOne1(arr4)).toEqual([1, 0])
  expect(plusOne1(arr5)).toEqual([1, 0, 0, 0, 0])
})
