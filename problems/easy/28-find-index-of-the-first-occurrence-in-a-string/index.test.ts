import { strStr, strStr1 } from './'

it('shall pass', () => {
  expect(strStr('sadbutsad', 'sad')).toBe(0)
  expect(strStr('adbfewfew', 'few')).toBe(3)
  expect(strStr('leetcode', 'leeto')).toBe(-1)

  expect(strStr1('sadbutsad', 'sad')).toBe(0)
  expect(strStr1('adbfewfew', 'few')).toBe(3)
  expect(strStr1('leetcode', 'leeto')).toBe(-1)
})
