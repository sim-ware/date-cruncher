import {
  createYearOperator, createDayOrWeekOperator, createHourOperator, createMinuteOperator,
  createSecondOperator, createMonthOperator
} from "../../src/stringifyUtils/createShorthandOperator";


describe("__createYearOperator__", () => {
  it("should return a string of '+/-{value}y' for Years", () => {
    expect(createYearOperator(new Date('2020-05-01T00:00:00'), new Date('2019-01-01T00:00:00'), []))
      .toStrictEqual(['-1y']);

    expect(createYearOperator(new Date('2020-05-01T00:00:00'), new Date('2021-01-01T00:00:00'), []))
      .toStrictEqual(['+1y']);
  });
});

describe("__createMonthOperator__", () => {
  it("should return a string of '+/-{value}s' for Months", () => {
    // MONTH
    expect(createMonthOperator(new Date('2020-05-01T00:00:00'), new Date('2020-04-01T00:00:00'), []))
      .toStrictEqual(['-1M']);
    expect(createMonthOperator(new Date('2020-05-01T00:00:00'), new Date('2020-06-01T00:00:00'), []))
      .toStrictEqual(['+1M']);
  });
});

describe("__createDayOrWeekOperator__", () => {
  it("should return a string of '+/-{value}d' for Days, or '+/-{value}w' for Weeks if Day falls on Monday", () => {
    expect(createDayOrWeekOperator(new Date('2020-05-01T00:00:00'), new Date('2020-04-30T00:00:00'), []))
      .toStrictEqual(['-1d']);

    expect(createDayOrWeekOperator(new Date('2020-05-01T00:00:00'), new Date('2020-05-02T00:00:00'), []))
      .toStrictEqual(['+1d']);

    expect(createDayOrWeekOperator(new Date('2020-05-01T00:00:00'), new Date('2020-04-24T00:00:00'), []))
      .toStrictEqual(['-1w']);

    expect(createDayOrWeekOperator(new Date('2020-05-01T00:00:00'), new Date('2020-05-08T00:00:00'), []))
      .toStrictEqual(['+1w']);
  });
});

describe("__createHourOperator__", () => {
  it("should return a string of '+/-{value}h' for Hours", () => {
    expect(createHourOperator(new Date('2020-05-01T00:00:00'), new Date('2020-04-26T20:00:00'), []))
      .toStrictEqual(['-4h']);

    expect(createHourOperator(new Date('2020-05-01T00:00:00'), new Date('2020-05-01T04:00:00'), []))
      .toStrictEqual(['+4h']);
  });
});

describe("__createMinuteOperator__", () => {
  it("should return a string of '+/-{value}m' for Minutes", () => {
    expect(createMinuteOperator(new Date('2020-05-01T00:00:00'), new Date('2020-04-30T23:57:00'), []))
      .toStrictEqual(['-3m']);

    expect(createMinuteOperator(new Date('2020-05-01T00:00:00'), new Date('2020-05-01T00:03:00'), []))
      .toStrictEqual(['+3m']);
  });
});

describe("__createSecondOperator__", () => {
  it("should return a string of '+/-{value}s' for Seconds", () => {
    expect(createSecondOperator(new Date('2020-05-01T00:00:00'), new Date('2020-04-30T23:59:57'), []))
      .toStrictEqual(['-3s']);

    expect(createSecondOperator(new Date('2020-05-01T00:00:00'), new Date('2020-05-01T00:00:03'), []))
      .toStrictEqual(['+3s']);
  });
});
