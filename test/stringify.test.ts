import { stringify } from "../src/stringify";


describe("__stringify__", () => {// Given the current date and time is `2020-05-01T00:00:00`:
  it("should take a Date and return a datestring", () => {
    // now-1y/y -> 2019-01-01T00:00:00 - now minus one year rounded to the nearest year
    expect(
      stringify(new Date('2019-01-01T00:00:00'), new Date('2020-05-01 00:00:0'))
    ).toStrictEqual('now-1y/y')
    // expect(
    //   stringify(new Date('2020-01-01T00:00:00'), new Date('2020-05-01 00:00:0'))
    // ).toStrictEqual('now/y')
  });
});
