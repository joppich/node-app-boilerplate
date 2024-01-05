import ConcatGreeter from '../src/concat';


describe('Concat functionality', () => {
    const s1 = process.env.TEST_STRING_1;
    const s2 = process.env.TEST_STRING_2;
    let strings: string[];

    beforeAll(() => {
        strings = [s1!, s2!];
    })

    test('test greeting with two concatenated strings', () => {
        const result = ConcatGreeter(strings);
        expect(result).toBe(`Hello ${s1}, ${s2}`)
    })
})