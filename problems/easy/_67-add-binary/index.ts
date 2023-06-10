export function addBinary(a: string, b: string): string {
  const numA = parseInt(a, 2)
  const numB = parseInt(b, 2)
  const sum = numA + numB
  return sum.toString(2)
}
