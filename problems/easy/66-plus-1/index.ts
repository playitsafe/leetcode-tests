const { log: l } = console

// number to string
export function plusOne(digits: number[]): number[] {
  const nums = +digits.join('') + 1
  return Array.from(nums.toString(), Number)
}

// recursive plus
export function plusOne1(digits: number[], tail: 0[] = []): number[] {
  const lastDigi = digits.pop()
  if (lastDigi === 9) {
    tail.push(0)
    return plusOne1(digits, tail)
  } else {
    digits.push((lastDigi || 0) + 1)
    // Note: concat() will return a new array
    return digits.concat(tail)
  }
}
