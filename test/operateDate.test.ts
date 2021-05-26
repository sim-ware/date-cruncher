import { subtract } from "../src/operateDate";


describe("__subtract__", () => {
  it("should take a date, unit of time, and a quantity and subtract", () => {
    expect(
      subtract(new Date('2021-05-26T20:17:56.511Z'), 'd', 1)
    ).toStrictEqual(
      new Date('2021-05-25T20:17:56.511Z')
    );

    expect(
      subtract(new Date('2021-05-26T20:17:56.511Z'), 'M', 1)
    ).toStrictEqual(
      new Date('2021-04-26T20:17:56.511Z')
    );

    expect(
      subtract(new Date('2021-05-26T20:17:56.511Z'), 'y', 1)
    ).toStrictEqual(
      new Date('2020-05-26T20:17:56.511Z')
    );

    expect(
      subtract(new Date('2021-05-26T20:17:56.511Z'), 'h', 1)
    ).toStrictEqual(
      new Date('2021-05-26T19:17:56.511Z')
    );

    expect(
      subtract(new Date('2021-05-26T20:17:56.511Z'), 'm', 1)
    ).toStrictEqual(
      new Date('2021-05-26T20:16:56.511Z')
    );

    expect(
      subtract(new Date('2021-05-26T20:17:56.511Z'), 's', 1)
    ).toStrictEqual(
      new Date('2021-05-26T20:17:55.511Z')
    );

    expect(
      subtract(new Date('2021-05-26T20:17:56.511Z'), 'w', 1)
    ).toStrictEqual(
      new Date('2021-05-19T20:17:56.511Z')
    );

    // 1. TEST ALL WITH 2
    // 1. TEST ALL WITH 10

  });
});
