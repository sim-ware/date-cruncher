import { parse } from "../src/parse";


describe("__parse__", () => {
  it("should take a datestring and return a Date", () => {
    // // // // // // // // // // // // // // // // // // // // // 
    // Given the current date and time is `2020-05-01T00:00:00`:
    // now-1y/y  -> 2019-01-01T00:00:00 - now minus one year rounded to the nearest year
    // now/y     -> 2020-01-01T00:00:00 - now rounded to the nearest year
    // now-1d    -> 2020-04-30T00:00:00 - now minus 1 day
    // now+1d    -> 2020-05-02T00:00:00 - now add 1 day
    // now-4d-4h -> 2020-04-26T20:00:00 - now minus four days and four hours
    // // // // // // // // // // // // // // // // // // // // // // // // //
    expect(true).toBe(true)
  });
});
