import sum from './sum'

it("test_sum", () => {
    const a: number = 5;
    expect(a).toBe(5);
    expect(sum(10, 20)).toBe(30)
})