import { romanToInt } from './13-roman-to-int'

test('should convert III to 3', () => {
  expect(romanToInt('M')).toEqual(1000)
  expect(romanToInt('III')).toEqual(3)
  expect(romanToInt('XII')).toEqual(12)
  expect(romanToInt('XXVII')).toEqual(27)
  expect(romanToInt('LVIII')).toEqual(58)
  expect(romanToInt('MCM')).toEqual(1900)
  expect(romanToInt('MCMXCIV')).toEqual(1994)
})
