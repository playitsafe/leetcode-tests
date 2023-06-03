export function strStr(haystack: string, needle: string): number {
  //   if (!haystack.includes(needle)) return -1

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.startsWith(needle, i)) {
      return i
    }
  }

  return -1
}

export function strStr1(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}
