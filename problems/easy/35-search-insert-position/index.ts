export function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
  return nums.length
}

export const searchInsert2 = function (nums: number[], target: number): number {
  // If the array is empty, return 0
  if (!nums.length) return 0

  // Define variables to keep track of the start and end indices of the array
  let start = 0,
    end = nums.length - 1,
    middle

  // Use a while loop to perform binary search for the target value
  while (start <= end) {
    // Calculate the middle index of the array using the formula (start + end) / 2, rounded down using Math.floor()
    middle = Math.floor((start + end) / 2)

    // If the value at the middle index is less than the target value, update the start variable to middle + 1
    // This eliminates the left half of the array from consideration
    if (nums[middle] < target) start = middle + 1
    // If the value at the middle index is greater than the target value, update the end variable to middle - 1
    // This eliminates the right half of the array from consideration
    else if (nums[middle] > target) end = middle - 1
    // If the value at the middle index is equal to the target value, return the middle index
    else return middle
  }

  // If the target value is not found in the array, return the start variable
  // This represents the index where the target value should be inserted to maintain the sorted order of the array
  return start
}
