import validatePassword from "./validatePassword";

describe("validatePassword should", () => {
  it("validate valid passwords", () => {
    expect(validatePassword("HelloWorld123")).toBe(true);
  });
  it("validate valid passwords", () => {
    expect(validatePassword("")).toBe(false);
  });
  it("validate valid passwords", () => {
    expect(validatePassword("JohnnyCash")).toBe(false);
  });
  it("validate valid passwords", () => {
    expect(validatePassword("0123456789")).toBe(false);
  });
  it("validate valid passwords", () => {
    expect(validatePassword("ilikepancakes3")).toBe(false);
  });
});
