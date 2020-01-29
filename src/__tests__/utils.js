import { getFormattedValue } from "../utils";

test("should format value correctly", () => {
  expect(getFormattedValue("1234.0")).toBe("1,234.0");
});

test("should 2 + 2 be 4", () => {
  expect(2 + 2).toBe(4);
  let someObj = { a: 10, b: 20 };
  expect(someObj).toEqual({ a: 10, b: 20 });
});
