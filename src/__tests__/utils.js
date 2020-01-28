test("should 2+2 be 4", () => {
  const result = 2 + 2;
  expect(result).toBe(4);
});

describe("scope", () => {
  test('should "a" be true', () => {
    expect("a").toBeTruthy();
  });
});
