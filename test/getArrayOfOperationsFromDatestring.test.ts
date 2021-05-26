import { getArrayOfOperationsFromDatestring } from "../src/getArrayOfOperationsFromDatestring";


describe("__getArrayOfOperationsFromDatestring__", () => {
  it("should return a string[] of all expected '- subtract', '+ add', and '/{unit} round to closest unit' operations", () => {
    expect(getArrayOfOperationsFromDatestring('now-1y/y')).toStrictEqual(['-1y', '/y']);
    expect(getArrayOfOperationsFromDatestring('now/y')).toStrictEqual(['/y']);
    expect(getArrayOfOperationsFromDatestring('now-1d')).toStrictEqual(['-1d']);
    expect(getArrayOfOperationsFromDatestring('now+1d')).toStrictEqual(['+1d']);
    expect(getArrayOfOperationsFromDatestring('now-4d-4h')).toStrictEqual(['-4d', '-4h']);
  });
});
