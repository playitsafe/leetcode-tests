// 
// function twoSum(nums: number[], target: number): number[] {
//     const lengthToLoop = nums.length - 1
//     for (let i = 0; i < lengthToLoop; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if ((nums[i] + nums[j]) === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// };

export function twoSum(nums: number[], target: number): number[] {
    const numberMap = new Map()
    for (const [i, num] of nums.entries()) {
        const numInMap = numberMap.get(target - num)
        if (numInMap != null) {
            return [numInMap, i]
        } else {
            numberMap.set(num, i)
        }
    }
    return []
}