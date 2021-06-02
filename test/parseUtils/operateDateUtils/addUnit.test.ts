import {
  addDays,
  addMonths,
  addYears,
  addHours,
  addMinutes,
  addSeconds,
  addWeeks
} from "../../../src/parseUtils/operateDateUtils/addUnit";


describe("__addDays__", () => {
  it("should take a date, and add a quantity of Days to it", () => {
    expect(addDays(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-05-27T20:17:56.511Z'));

    expect(addDays(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-05-28T20:17:56.511Z'));

    expect(addDays(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-06-06T20:17:56.511Z'));
  });
});

describe("__addMonths__", () => {
  it("should take a date, and add a quantity of Months to it", () => {
    expect(addMonths(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-06-26T20:17:56.511Z'));

    expect(addMonths(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-07-26T20:17:56.511Z'));

    expect(addMonths(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2022-04-26T20:17:56.511Z'));
  });
});

describe("__addYears__", () => {
  it("should take a date, and add a quantity of Years to it", () => {
    expect(addYears(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2022-05-26T20:17:56.511Z'));

    expect(addYears(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2023-05-26T20:17:56.511Z'));

    expect(addYears(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2032-05-26T20:17:56.511Z'));
  });
});

describe("__addHours__", () => {
  it("should take a date, and add a quantity of Hours to it", () => {
    expect(addHours(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-05-26T21:17:56.511Z'));

    expect(addHours(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-05-26T22:17:56.511Z'));

    expect(addHours(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-05-27T07:17:56.511Z'));
  });
});

describe("__addMinutes__", () => {
  it("should take a date, and add a quantity of Minutes to it", () => {
    expect(addMinutes(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-05-26T20:18:56.511Z'));

    expect(addMinutes(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-05-26T20:19:56.511Z'));
      
    expect(addMinutes(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-05-26T20:28:56.511Z'));
  });
});

describe("__addSeconds__", () => {
  it("should take a date, and add a quantity of Seconds to it", () => {
    expect(addSeconds(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-05-26T20:17:57.511Z'));

    expect(addSeconds(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-05-26T20:17:58.511Z'));

    expect(addSeconds(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-05-26T20:18:07.511Z'));
  });
});

describe("__addWeeks__", () => {
  it("should take a date, and add a quantity of Weeks to it", () => {
    expect(addWeeks(new Date('2021-05-26T20:17:56.511Z'), 1))
      .toStrictEqual(new Date('2021-06-02T20:17:56.511Z'));

    expect(addWeeks(new Date('2021-05-26T20:17:56.511Z'), 2))
      .toStrictEqual(new Date('2021-06-09T20:17:56.511Z'));

    expect(addWeeks(new Date('2021-05-26T20:17:56.511Z'), 11))
      .toStrictEqual(new Date('2021-08-11T20:17:56.511Z'));
  });
});