import { longestCommonPrefix } from './index'


const arr1 = ["flower","flow","flight"]
const arr2 = ["dog","racecar","car"]


describe('it should return longest common prefix', () => {
    test('test 1', () => {
        expect(longestCommonPrefix(arr1)).toBe('fl')
        expect(longestCommonPrefix(arr2)).toBe('')
    })
})