import {
  roundToClosestDay,
  roundToClosestWeek,
  roundToClosestSecond,
  roundToClosestMinute,
  roundToClosestHour,
  roundToClosestYear,
  roundToClosestMonth
} from "../src/roundToClosestUnit";


describe("__roundToClosestDay__", () => {
  it("should take a date, and round to nearest Day", () => {
    expect(roundToClosestDay(new Date('2021-05-26T12:00:00.000Z')))
      .toStrictEqual(new Date('2021-05-27T00:00:00.000Z'));

    expect(roundToClosestDay(new Date('2021-05-26T10:59:59.999Z')))
      .toStrictEqual(new Date('2021-05-26T00:00:00.000Z'));
  });
});

describe("__roundToClosestMonth__", () => {
  it("should take a date, and round to nearest Month", () => {
    expect(roundToClosestMonth(new Date('2021-01-05T20:17:56.511Z')))
      .toStrictEqual(new Date('2021-01-01T00:00:00.000Z'));

    expect(roundToClosestMonth(new Date('2021-01-15T11:59:59.999Z')))
      .toStrictEqual(new Date('2021-01-01T00:00:00.000Z'));

    expect(roundToClosestMonth(new Date('2021-01-15T12:00:00.000Z')))
      .toStrictEqual(new Date('2021-02-01T00:00:00.000Z'));

    expect(roundToClosestMonth(new Date('2021-02-05T20:17:56.511Z')))
      .toStrictEqual(new Date('2021-02-01T00:00:00.000Z'));

    expect(roundToClosestMonth(new Date('2021-02-13T23:59:59.999Z')))
      .toStrictEqual(new Date('2021-02-01T00:00:00.000Z'));

    expect(roundToClosestMonth(new Date('2021-02-14T00:00:00.000Z')))
      .toStrictEqual(new Date('2021-03-01T00:00:00.000Z'));

    expect(roundToClosestMonth(new Date('2021-04-05T20:17:56.511Z')))
      .toStrictEqual(new Date('2021-04-01T00:00:00.000Z'));

    expect(roundToClosestMonth(new Date('2021-04-14T23:59:59.999Z')))
      .toStrictEqual(new Date('2021-04-01T00:00:00.000Z'));

    expect(roundToClosestMonth(new Date('2021-04-15T00:00:00.000Z')))
      .toStrictEqual(new Date('2021-05-01T00:00:00.000Z'));
      // add tests for specific leap year to make sure it works //
  });
});

describe("__roundToClosestYear__", () => {
  it("should take a date, and round to nearest Year", () => {
    expect(roundToClosestYear(new Date('2021-07-01T12:00:00.000Z')))
      .toStrictEqual(new Date('2022-01-01T00:00:00.000Z'));

    expect(roundToClosestYear(new Date('2021-07-01T11:59:00.000Z')))
      .toStrictEqual(new Date('2021-01-01T00:00:00.000Z')); 
  });
});


describe("__roundToClosestHour__", () => {
  it("should take a date, and round to nearest Hour", () => {
    expect(roundToClosestHour(new Date('2021-05-26T20:29:00.00Z')))
      .toStrictEqual(new Date('2021-05-26T20:00:00.000Z'));

    expect(roundToClosestHour(new Date('2021-05-26T20:30:00.00Z')))
      .toStrictEqual(new Date('2021-05-26T21:00:00.000Z'));
  });
});

describe("__roundToClosestMinute__", () => {
  it("should take a date, and round to nearest Minute", () => {
    expect(roundToClosestMinute(new Date('2021-05-26T20:17:29.999Z')))
      .toStrictEqual(new Date('2021-05-26T20:17:00.000Z'));

    expect(roundToClosestMinute(new Date('2021-05-26T20:17:30.000Z')))
      .toStrictEqual(new Date('2021-05-26T20:18:00.000Z'));
  });
});

describe("__roundToClosestSecond__", () => {
  it("should take a date, and round to nearest Second", () => {
    expect(roundToClosestSecond(new Date('2021-05-26T20:17:56.499Z')))
      .toStrictEqual(new Date('2021-05-26T20:17:56.000Z'));

    expect(roundToClosestSecond(new Date('2021-05-26T20:17:56.500Z')))
      .toStrictEqual(new Date('2021-05-26T20:17:57.000Z'));
  });
});

describe("__roundToClosestWeek__", () => {
  it("should take a date, and round to nearest Week", () => {
    expect(roundToClosestWeek(new Date('2021-05-24T20:17:56.511Z')))
      .toStrictEqual(new Date('2021-05-24T00:00:00.000Z'));

    expect(roundToClosestWeek(new Date('2021-05-25T20:17:56.511Z')))
      .toStrictEqual(new Date('2021-05-24T00:00:00.000Z'));

    expect(roundToClosestWeek(new Date('2021-05-26T20:17:56.511Z')))
      .toStrictEqual(new Date('2021-05-24T00:00:00.000Z'));

    expect(roundToClosestWeek(new Date('2021-05-27T20:17:56.511Z')))
      .toStrictEqual(new Date('2021-05-31T00:00:00.000Z'));

    expect(roundToClosestWeek(new Date('2021-05-28T20:17:56.511Z')))
      .toStrictEqual(new Date('2021-05-31T00:00:00.000Z'));

    expect(roundToClosestWeek(new Date('2021-05-29T20:17:56.511Z')))
      .toStrictEqual(new Date('2021-05-31T00:00:00.000Z'));
  });
});
