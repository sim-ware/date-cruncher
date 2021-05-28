import { roundToClosestUnit } from "../src/operateDate";


describe("__roundToClosestUnit__", () => {
  it("should take a date, unit of time, and a quantity and roundToClosestUnit", () => {
    // d days
    expect(roundToClosestUnit(new Date('2021-05-26T12:00:00.000Z'), 'd'))
      .toStrictEqual(new Date('2021-05-27T00:00:00.000Z'));
    expect(roundToClosestUnit(new Date('2021-05-26T10:59:59.999Z'), 'd'))
      .toStrictEqual(new Date('2021-05-26T00:00:00.000Z'));

    // // M month
    // expect(roundToClosestUnit(new Date('2021-05-26T20:17:56.511Z'), 'M', 1))
    //   .toStrictEqual(new Date('2021-06-26T20:17:56.511Z'));
    // expect(roundToClosestUnit(new Date('2021-05-26T20:17:56.511Z'), 'M', 2))
    //   .toStrictEqual(new Date('2021-07-26T20:17:56.511Z'));
    // expect(roundToClosestUnit(new Date('2021-05-26T20:17:56.511Z'), 'M', 11))
    //   .toStrictEqual(new Date('2022-04-26T20:17:56.511Z'));

    // y year
    expect(roundToClosestUnit(new Date('2021-07-01T12:00:00.000Z'), 'y'))
      .toStrictEqual(new Date('2022-01-01T00:00:00.000Z'));
    expect(roundToClosestUnit(new Date('2021-07-01T11:59:00.000Z'), 'y'))
      .toStrictEqual(new Date('2021-01-01T00:00:00.000Z'));

    // h hour
    expect(roundToClosestUnit(new Date('2021-05-26T20:29:00.00Z'), 'h'))
      .toStrictEqual(new Date('2021-05-26T20:00:00.000Z'));
    expect(roundToClosestUnit(new Date('2021-05-26T20:30:00.00Z'), 'h'))
      .toStrictEqual(new Date('2021-05-26T21:00:00.000Z'));

    // m minute
    expect(roundToClosestUnit(new Date('2021-05-26T20:17:29.999Z'), 'm'))
      .toStrictEqual(new Date('2021-05-26T20:17:00.000Z'));
    expect(roundToClosestUnit(new Date('2021-05-26T20:17:30.000Z'), 'm'))
      .toStrictEqual(new Date('2021-05-26T20:18:00.000Z'));

    // s second
    expect(roundToClosestUnit(new Date('2021-05-26T20:17:56.499Z'), 's'))
      .toStrictEqual(new Date('2021-05-26T20:17:56.000Z'));
    expect(roundToClosestUnit(new Date('2021-05-26T20:17:56.500Z'), 's'))
      .toStrictEqual(new Date('2021-05-26T20:17:57.000Z'));

    // w week
    expect(roundToClosestUnit(new Date('2021-05-24T20:17:56.511Z'), 'w'))
      .toStrictEqual(new Date('2021-05-24T00:00:00.000Z'));
    expect(roundToClosestUnit(new Date('2021-05-25T20:17:56.511Z'), 'w'))
      .toStrictEqual(new Date('2021-05-24T00:00:00.000Z'));
    expect(roundToClosestUnit(new Date('2021-05-26T20:17:56.511Z'), 'w'))
      .toStrictEqual(new Date('2021-05-24T00:00:00.000Z'));
    expect(roundToClosestUnit(new Date('2021-05-27T20:17:56.511Z'), 'w'))
      .toStrictEqual(new Date('2021-05-31T00:00:00.000Z'));
    expect(roundToClosestUnit(new Date('2021-05-28T20:17:56.511Z'), 'w'))
      .toStrictEqual(new Date('2021-05-31T00:00:00.000Z'));
    expect(roundToClosestUnit(new Date('2021-05-29T20:17:56.511Z'), 'w'))
      .toStrictEqual(new Date('2021-05-31T00:00:00.000Z'));

  });
});
