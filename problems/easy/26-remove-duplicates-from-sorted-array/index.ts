export function removeDuplicates(nums: number[]): number {
  let adjust = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      adjust += 1
    }

    nums[i - adjust] = nums[i]
  }

  return nums.length - adjust
}

function removeDuplicates1(nums: number[]): number {
  if (nums.length === 1) return 1

  let p2 = 0
  let p1 = 0

  while (p2 < nums.length) {
    if (nums[p1] < nums[p2]) {
      nums[p1 + 1] = nums[p2]
      p1++
    }
    p2++
  }
  return p1 + 1
}

function removeDuplicates2(nums: number[]): number {
  let prev: any = nums[0]
  let prevIdx: number = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== prev) {
      nums[prevIdx] = nums[i]
      prevIdx++
      prev = nums[i]
    }
  }

  return prevIdx
}
