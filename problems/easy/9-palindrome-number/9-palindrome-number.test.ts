import { isPalindrome, isPalindrome2 } from './9-palindrome-number'

test('should pass for all palindrome nums', () => {
    // expect(isPalindrome2(12344321)).toBe(true)
    expect(isPalindrome(12344321)).toBe(true)
    expect(isPalindrome(0)).toBe(true)
    expect(isPalindrome(12345321)).toBe(false)
    expect(isPalindrome(11)).toBe(true)
    expect(isPalindrome(-11)).toBe(false)
    expect(isPalindrome(1001)).toBe(true)
})