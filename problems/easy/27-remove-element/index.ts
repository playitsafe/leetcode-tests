export function removeElement(numbers: number[], val: number): number {
  let pointer = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== val) {
      numbers[pointer] = numbers[i]
      pointer++
    }
  }
  return pointer
}
