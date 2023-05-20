// https://leetcode.com/problems/roman-to-integer/
const numMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
} as const

type RomanLetter = keyof typeof numMap

export function romanToInt (s: string): number {
  let total = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    const letter = s[i] as RomanLetter
    const num = numMap[letter]

    const nextLetter = s[i + 1] as RomanLetter
    const nextNum = numMap[nextLetter]

    if (num < nextNum) {
      total -= num
    } else {
      total += num
    }
  }

  return total
};

// Todo - investigate
function romanToInt2 (s: string): number {
  const numbers: number[] = s.split('').map(v => numMap[v as RomanLetter])
  return numbers.reduce((acc, num, index) => num < numbers[index + 1] ?? 0 ? acc - num : acc + num, 0)
};
