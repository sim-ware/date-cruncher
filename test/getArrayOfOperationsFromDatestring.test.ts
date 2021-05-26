import { getArrayOfOperationsFromDatestring } from "../src/getArrayOfOperationsFromDatestring";

describe("getArrayOfOperationsFromDatestring", () => {
  it("should return a string[] of all expected '- subtract', '+ add', and '/{unit} round to closest unit' operations", () => {
    expect(getArrayOfOperationsFromDatestring('now-1y/y')).toBe(['-1y', '/y']);
    expect(getArrayOfOperationsFromDatestring('now/y')).toBe(['/y']);
    expect(getArrayOfOperationsFromDatestring('now-1d')).toBe(['-1d']);
    expect(getArrayOfOperationsFromDatestring('now+1d')).toBe(['+1d']);
    expect(getArrayOfOperationsFromDatestring('now-4d-4h')).toBe(['-4d', '-4h']);
  });
});
