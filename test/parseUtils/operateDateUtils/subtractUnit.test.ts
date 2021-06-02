import {
  subtractDays,
  subtractMonths,
  subtractYears,
  subtractHours,
  subtractMinutes,
  subtractSeconds,
  subtractWeeks
} from "../../../src/parseUtils/operateDateUtils/subtractUnit";


describe("__subtractDays__", () => {
  it("should take a date, and subtract a quantity of Days from it", () => {
    expect(subtractDays(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-05-25T20:17:56.511Z'));

    expect(subtractDays(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-05-24T20:17:56.511Z'));

    expect(subtractDays(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-05-15T20:17:56.511Z'));
  });
});

describe("__subtractMonths__", () => {
  it("should take a date, and subtract a quantity of Months from it", () => {
    expect(subtractMonths(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-04-26T20:17:56.511Z'));

    expect(subtractMonths(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-03-26T20:17:56.511Z'));

    expect(subtractMonths(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2020-06-26T20:17:56.511Z'));
  });
});

describe("__subtractYears__", () => {
  it("should take a date, and subtract a quantity of Years from it", () => {
    expect(subtractYears(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2020-05-26T20:17:56.511Z'));
      
    expect(subtractYears(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2019-05-26T20:17:56.511Z'));

    expect(subtractYears(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2010-05-26T20:17:56.511Z'));
  });
});

describe("__subtractHours__", () => {
  it("should take a date, and subtract a quantity of Hours from it", () => {
    expect(subtractHours(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-05-26T19:17:56.511Z'));

    expect(subtractHours(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-05-26T18:17:56.511Z'));

    expect(subtractHours(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-05-26T09:17:56.511Z'));
  });
});

describe("__subtractMinutes__", () => {
  it("should take a date, and subtract a quantity of Minutes from it", () => {
    expect(subtractMinutes(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-05-26T20:16:56.511Z'));

    expect(subtractMinutes(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-05-26T20:15:56.511Z'));

    expect(subtractMinutes(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-05-26T20:06:56.511Z'));
  });
});

describe("__subtractSeconds__", () => {
  it("should take a date, and subtract a quantity of Seconds from it", () => {
    expect(subtractSeconds(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-05-26T20:17:55.511Z'));

    expect(subtractSeconds(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-05-26T20:17:54.511Z'));

    expect(subtractSeconds(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-05-26T20:17:45.511Z'));
  });
});

describe("__subtractWeeks__", () => {
  it("should take a date, and subtract a quantity of Weeks from it", () => {
    expect(subtractWeeks(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-05-19T20:17:56.511Z'));

    expect(subtractWeeks(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-05-12T20:17:56.511Z'));

    expect(subtractWeeks(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-03-10T20:17:56.511Z'));
  });
});
