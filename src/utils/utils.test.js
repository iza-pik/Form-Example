import validatePassword from "./validatePassword";

describe("validatePassword should", () => {
  it("validate valid passwords", () => {
    expect(validatePassword("HelloWorld123")).toBe(true);
    expect(validatePassword("HelloWorld123")).toBe(true);
    expect(validatePassword("HelloWorld123")).toBe(true);
  });
  it("invalidate wrong passwords", () => {
    expect(validatePassword("")).toBe(false);
    expect(validatePassword("JohnnyCash")).toBe(false);
    expect(validatePassword("0123456789")).toBe(false);
    expect(validatePassword("ilikepancakes3")).toBe(false);
  });
});
