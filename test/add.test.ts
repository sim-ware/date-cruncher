import { add } from "../src/operateDate";


describe("__add__", () => {
  it("should take a date, unit of time, and a quantity and add", () => {
    // d days
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'd', 1))
      .toStrictEqual(new Date('2021-05-27T20:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'd', 2))
      .toStrictEqual(new Date('2021-05-28T20:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'd', 11))
      .toStrictEqual(new Date('2021-06-06T20:17:56.511Z'));

    // M month
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'M', 1))
      .toStrictEqual(new Date('2021-06-26T20:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'M', 2))
      .toStrictEqual(new Date('2021-07-26T20:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'M', 11))
      .toStrictEqual(new Date('2022-04-26T20:17:56.511Z'));

    // y year
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'y', 1))
      .toStrictEqual(new Date('2022-05-26T20:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'y', 2))
      .toStrictEqual(new Date('2023-05-26T20:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'y', 11))
      .toStrictEqual(new Date('2032-05-26T20:17:56.511Z'));

    // h hour
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'h', 1))
      .toStrictEqual(new Date('2021-05-26T21:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'h', 2))
      .toStrictEqual(new Date('2021-05-26T22:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'h', 11))
      .toStrictEqual(new Date('2021-05-27T07:17:56.511Z'));

    // m minute
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'm', 1))
      .toStrictEqual(new Date('2021-05-26T20:18:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'm', 2))
      .toStrictEqual(new Date('2021-05-26T20:19:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'm', 11))
      .toStrictEqual(new Date('2021-05-26T20:28:56.511Z'));

    // s second
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 's', 1))
      .toStrictEqual(new Date('2021-05-26T20:17:57.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 's', 2))
      .toStrictEqual(new Date('2021-05-26T20:17:58.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 's', 11))
      .toStrictEqual(new Date('2021-05-26T20:18:07.511Z'));

    // w week
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'w', 1))
      .toStrictEqual(new Date('2021-06-02T20:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'w', 2))
      .toStrictEqual(new Date('2021-06-09T20:17:56.511Z'));
    expect(add(new Date('2021-05-26T20:17:56.511Z'), 'w', 11))
      .toStrictEqual(new Date('2021-08-11T20:17:56.511Z'));
  });
});
