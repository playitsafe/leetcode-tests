import { mySqrt } from './'

test('it shall pass', () => {
  expect(mySqrt(4)).toBe(2)
  expect(mySqrt(3)).toBe(1)
  expect(mySqrt(6)).toBe(2)
  expect(mySqrt(13)).toBe(3)
})
