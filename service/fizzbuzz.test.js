const fizzBuzzHelper = require("./fizsbuzz-helper");

describe("FizzBuzz service tests", () => {
  it("Invalid check", () => {
    expect(fizzBuzzHelper.fizzBuzzImpl(null)).toBe("Invalid");
    expect(fizzBuzzHelper.fizzBuzzImpl("undefined")).toBe("Invalid");
    expect(fizzBuzzHelper.fizzBuzzImpl(0)).toBe("Invalid");
    expect(fizzBuzzHelper.fizzBuzzImpl(-7)).toBe("Invalid");
  });
  it("Fizz check", () => {
    const result = fizzBuzzHelper.fizzBuzzImpl(3);
    expect(result).toBe("Fizz");
  });
  it("Buzz check", () => {
    const result = fizzBuzzHelper.fizzBuzzImpl(5);
    expect(result).toBe("Buzz");
  });
  it("FizzBuzz check", () => {
    const result = fizzBuzzHelper.fizzBuzzImpl(15);
    expect(result).toBe("FizzBuzz");
  });
});

/**
 *
 * expect(..).toBe()
 * expect(..).toBeFalsy()
 * expect(..).toBeTruthy()
 * expect(..).toEqual()
 *
 */
