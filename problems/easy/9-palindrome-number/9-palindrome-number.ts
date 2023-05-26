export function isPalindrome (x: number): boolean {
  // if the integer is negative or ends with a zero, return false
  const endsWith0 = x !== 0 && (x % 10) === 0
  if (x < 0 || endsWith0) {
    return false
  }
  // 12321
  let half = 0 // 123, 12
  while (x > half) {
    half = half * 10 + x % 10 // last digit
    x = Math.floor(x / 10) // remove last digit
  }
  return x === half || x === Math.floor(half / 10)
};

// this fails 12344321
export function isPalindrome2 (x: number): boolean {
  // if the integer is negative or ends with a zero, return false
  const endsWith0 = x !== 0 && (x % 10) === 0
  if (x < 0 || endsWith0) {
    return false
  }
  let register = 0
  while (x > register) {
    register = register * 10 + x % 10
    x /= 10
    console.log('x', x)
    console.log('register', register)
  }
  return x === register || x === register / 10
};
