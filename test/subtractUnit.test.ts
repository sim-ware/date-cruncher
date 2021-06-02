import { subtractUnit } from "../src/subtractUnit";


describe("__subtractUnit__", () => {
  it("should take a date, unit of time, and a quantity and subtract", () => {
    // d days
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'd', 1))
      .toStrictEqual(new Date('2021-05-25T20:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'd', 2))
      .toStrictEqual(new Date('2021-05-24T20:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'd', 11))
      .toStrictEqual(new Date('2021-05-15T20:17:56.511Z'));

    // M month
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'M', 1))
      .toStrictEqual(new Date('2021-04-26T20:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'M', 2))
      .toStrictEqual(new Date('2021-03-26T20:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'M', 11))
      .toStrictEqual(new Date('2020-06-26T20:17:56.511Z'));

    // y year
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'y', 1))
      .toStrictEqual(new Date('2020-05-26T20:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'y', 2))
      .toStrictEqual(new Date('2019-05-26T20:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'y', 11))
      .toStrictEqual(new Date('2010-05-26T20:17:56.511Z'));

    // h hour
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'h', 1))
      .toStrictEqual(new Date('2021-05-26T19:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'h', 2))
      .toStrictEqual(new Date('2021-05-26T18:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'h', 11))
      .toStrictEqual(new Date('2021-05-26T09:17:56.511Z'));

    // m minute
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'm', 1))
      .toStrictEqual(new Date('2021-05-26T20:16:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'm', 2))
      .toStrictEqual(new Date('2021-05-26T20:15:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'm', 11))
      .toStrictEqual(new Date('2021-05-26T20:06:56.511Z'));

    // s second
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 's', 1))
      .toStrictEqual(new Date('2021-05-26T20:17:55.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 's', 2))
      .toStrictEqual(new Date('2021-05-26T20:17:54.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 's', 11))
      .toStrictEqual(new Date('2021-05-26T20:17:45.511Z'));

    // w week
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'w', 1))
      .toStrictEqual(new Date('2021-05-19T20:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'w', 2))
      .toStrictEqual(new Date('2021-05-12T20:17:56.511Z'));
    expect(subtractUnit(new Date('2021-05-26T20:17:56.511Z'), 'w', 11))
      .toStrictEqual(new Date('2021-03-10T20:17:56.511Z'));
  });
});
