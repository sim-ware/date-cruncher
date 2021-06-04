import { isDateRounded } from "../../src/stringifyUtils/isDateRounded";


describe("__isDateRounded__", () => {
  it("should return a string of '/{unit}'", () => {
    // Example Data: tests for Years and Hours
    expect(isDateRounded(new Date('2019-01-01T00:00:00')))
      .toStrictEqual('/y');
    expect(isDateRounded(new Date('2020-01-01T00:00:00')))
      .toStrictEqual('/y');
    expect(isDateRounded(new Date('2020-04-30T00:00:00')))
      .toStrictEqual('/h'); // for some reason in UTC terms this comes out as 11pm the previous day
    expect(isDateRounded(new Date('2020-05-02T00:00:00')))
      .toStrictEqual('/h');
    expect(isDateRounded(new Date('2020-04-26T20:00:00')))
      .toStrictEqual('/h');

    // Remaining Units: tests for Months, Weeks, Days, Minutes and Seconds
    expect(isDateRounded(new Date('2020-04-01T01:00:00')))
      .toStrictEqual('/M');
    expect(isDateRounded(new Date('2020-04-27T01:00:00')))
      .toStrictEqual('/w');
    expect(isDateRounded(new Date('2020-04-26T01:00:00')))
      .toStrictEqual('/d');
    expect(isDateRounded(new Date('2020-04-26T20:01:00')))
      .toStrictEqual('/m');
    expect(isDateRounded(new Date('2020-04-26T20:00:01')))
      .toStrictEqual('/s');
  });
});
