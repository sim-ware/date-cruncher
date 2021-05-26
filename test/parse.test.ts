import { parse } from "../src/parse";


describe("__parse__", () => {
  it("should take a datestring and return a Date", () => {
    expect(parse('now-1y/y')).toBe('now-1y/y');
    expect(parse('now/y')).toBe('now/y');
    expect(parse('now-1d')).toBe('now-1d');
    expect(parse('now+1d')).toBe('now+1d');
    expect(parse('now-4d-4h')).toBe('now-4d-4h');
    // 
    expect(parse('now-4d-23h')).toBe('now-4d-23h');
    // 
  });
});
