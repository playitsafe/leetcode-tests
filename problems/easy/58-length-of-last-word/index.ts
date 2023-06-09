const { log: l } = console

export function lengthOfLastWord(str: string): number {
  const arr = str.split(' ').filter(s => s)
  return arr[arr.length - 1].length
}

export function lengthOfLastWord1(str: string): number {
  return str.trim().split(' ').pop()!.length || 0
}
