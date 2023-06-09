import { lengthOfLastWord } from './'

const w1 = 'Hello World'
const w2 = '   fly me   to   the moon  '
const w3 = 'luffy is still joyboy'

describe('it shall pass', () => {
  expect(lengthOfLastWord(w1)).toBe(5)
  expect(lengthOfLastWord(w2)).toBe(4)
  expect(lengthOfLastWord(w3)).toBe(6)
})
