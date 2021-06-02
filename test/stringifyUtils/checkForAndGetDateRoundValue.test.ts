import { checkForAndGetDateRoundValue } from "../../src/stringifyUtils/checkForAndGetDateRoundValue";
import { isDateRounded } from "../../src/stringifyUtils/checkForAndGetDateRoundValue";


describe("__checkForAndGetDateRoundValue__", () => {
  it("should return a string of '/{unit} round to closest unit', or null if already applicable to original date", () => {
    expect(checkForAndGetDateRoundValue(new Date('2019-01-01T00:00:00'), new Date('2020-05-01 00:00:0')))
      .toStrictEqual('/y');
    expect(checkForAndGetDateRoundValue(new Date('2020-01-01T00:00:00'), new Date('2020-05-01 00:00:0')))
      .toStrictEqual('/y');
    expect(checkForAndGetDateRoundValue(new Date('2020-04-30T00:00:00'), new Date('2020-05-01 00:00:0')))
      .toStrictEqual(null);
    expect(checkForAndGetDateRoundValue(new Date('2020-05-02T00:00:00'), new Date('2020-05-01 00:00:0')))
      .toStrictEqual(null);
    expect(checkForAndGetDateRoundValue(new Date('2020-04-26T20:00:00'), new Date('2020-05-01 00:00:0')))
      .toStrictEqual(null);
  });
});

describe("__isDateRounded__", () => {
  it("should return a string of '/{unit} round to closest unit'", () => {
    expect(isDateRounded(new Date('2019-01-01T00:00:00')))
      .toStrictEqual('/y');
    expect(isDateRounded(new Date('2020-01-01T00:00:00')))
      .toStrictEqual('/y');
    expect(isDateRounded(new Date('2020-04-30T00:00:00')))
      .toStrictEqual('/h');
    expect(isDateRounded(new Date('2020-05-02T00:00:00')))
      .toStrictEqual('/h');
    expect(isDateRounded(new Date('2020-04-26T20:00:00')))
      .toStrictEqual('/h');
  });
});
