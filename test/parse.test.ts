import { parse } from "../src/parse";


describe("__parse__", () => {// Given the current date and time is `2020-05-01T00:00:00`:
  it("should take a datestring and return a Date", () => {
    // now-1y/y -> 2019-01-01T00:00:00 - now minus one year rounded to the nearest year
    expect(parse('now-1y/y', new Date('2020-05-01 00:00:0')))
      .toStrictEqual(new Date('2019-01-01T00:00:00'))

    // now/y -> 2020-01-01T00:00:00 - now rounded to the nearest year
    expect(parse('now/y', new Date('2020-05-01 00:00:0')))
      .toStrictEqual(new Date('2020-01-01T00:00:00'))

    // now-1d -> 2020-04-30T00:00:00 - now minus 1 day
    expect(parse('now-1d', new Date('2020-05-01 00:00:0')))
      .toStrictEqual(new Date('2020-04-30T00:00:00'))

    // now+1d -> 2020-05-02T00:00:00 - now add 1 day
    expect(parse('now+1d', new Date('2020-05-01 00:00:0')))
      .toStrictEqual(new Date('2020-05-02T00:00:00'))

    // now-4d-4h -> 2020-04-26T20:00:00 - now minus four days and four hours
    expect(parse('now-4d-4h', new Date('2020-05-01 00:00:0')))
      .toStrictEqual(new Date('2020-04-26T20:00:00'))

    // test without optionalDate Param
    const testDate = new Date()
    testDate.setUTCDate(new Date().getUTCDate()+1)
    expect(parse('now+1d'))
      .toStrictEqual(testDate)
    // // // // // // // // // // // // // // // // // // // // // // // // //
  });
});
