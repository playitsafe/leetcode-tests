export function mySqrt(x: number): number {
  // Initialize the left and right variables for binary search
  let left = 0,
    right = x

  // Binary search to find the square root of x
  while (left <= right) {
    // Calculate the midpoint between left and right
    const mid = Math.floor((left + right) / 2)

    // Check if the square of the midpoint is less than or equal to x
    if (mid * mid <= x) {
      // If the square of the midpoint is less than or equal to x, we update the left variable to move towards the right half of the search space
      left = mid + 1
    } else {
      // If the square of the midpoint is greater than x, we update the right variable to move towards the left half of the search space
      right = mid - 1
    }
  }

  // Return the value of right, which is the integer square root of x rounded down to the nearest integer
  return right
}
