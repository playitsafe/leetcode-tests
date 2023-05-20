import { isValid } from './index'

test('should pass for valid parentheses', () => {
    expect(isValid('()[]{}')).toBe(true)
    expect(isValid('[()]{}')).toBe(true)
    expect(isValid('[(]){}')).toBe(false)
    expect(isValid('{[()]}')).toBe(true)
    expect(isValid('({[()]}{})')).toBe(true)
    expect(isValid('({[([)]]}{{[}]})')).toBe(false)
})