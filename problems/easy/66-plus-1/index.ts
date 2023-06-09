const { log: l } = console

// to string
export function plusOne(digits: number[]): number[] {
  const nums = +digits.join('') + 1
  return Array.from(nums.toString(), Number)
}

// array pop
export function plusOne1(digits: number[], tail: 0[] = []): number[] {
  const lastDigi = digits.pop()
  if (lastDigi === 9) {
    tail.push(0)
    return plusOne1(digits, tail)
  } else {
    if (digits.length > 0) {
      digits.push(lastDigi! + 1)
    } else {
      digits.push(1)
    }

    // Note: concat() will return a new array
    return digits.concat(tail)
  }
}
