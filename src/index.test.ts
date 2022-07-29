import { add } from './index';

test('adds 1 and 2 should be 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('test 1 and -2', () => {
    expect(add(1, -2)).toBe(-1);
})