import { stringify } from "../src/stringify";


describe("__stringify__", () => {// Given the current date and time is `2020-05-01T00:00:00`:
  it("should take a Date and return a datestring", () => {
    expect( // now-1y/y -> 2019-01-01T00:00:00 - now minus one year rounded to the nearest year
      stringify(new Date('2019-01-01T00:00:00'), new Date('2020-05-01T00:00:00'))
    ).toStrictEqual('now-1y/y')

    expect( // now/y -> 2020-01-01T00:00:00 - now rounded to the nearest year
      stringify(new Date('2020-01-01T00:00:00'), new Date('2020-05-01T00:00:00'))
    ).toStrictEqual('now/y')

    expect( // now-1d -> 2020-04-30T00:00:00 - now minus 1 day
      stringify(new Date('2020-04-30T00:00:00'), new Date('2020-05-01T00:00:00'))
    ).toStrictEqual('now-1d')

    expect( // now+1d -> 2020-05-02T00:00:00 - now add 1 day
      stringify(new Date('2020-05-02T00:00:00'), new Date('2020-05-01T00:00:00'))
    ).toStrictEqual('now+1d')

    expect( // now-4d-4h -> 2020-04-26T20:00:00 - now minus four days and four hours
      stringify(new Date('2020-04-26T20:00:00'), new Date('2020-05-01T00:00:00'))
    ).toStrictEqual('now-4d-4h')
  });
});
