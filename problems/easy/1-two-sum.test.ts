import { twoSum } from './1-two-sum'

const nums = [2,7,11,15]
const target = 9

test('two sum should return right indexes from array', () => {
    expect(twoSum(nums, target).sort()).toEqual([0,1].sort())
})