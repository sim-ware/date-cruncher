import { operateDate } from "../src/operateDate";


describe("__operateDate__", () => {
  it("should return a string[] of all expected '- subtract', '+ add', and '/{unit} round to closest unit' operations", () => {
    // 'now-1y/y'
    expect(operateDate('-1y', new Date('2021-01-01T00:00:00.000Z')))
      .toStrictEqual(new Date('2020-01-01T00:00:00.000Z'))
    expect(operateDate('/y', new Date('2021-01-01T00:00:00.000Z')))
      .toStrictEqual(new Date('2021-01-01T00:00:00.000Z'))

    // 'now/y'
    expect(operateDate('/y', new Date('2021-01-01T00:00:00.000Z')))
      .toStrictEqual(new Date('2021-01-01T00:00:00.000Z'))

    // 'now-1d'
    expect(operateDate('-1d', new Date('2021-01-01T00:00:00.000Z')))
      .toStrictEqual(new Date('2020-12-31T00:00:00.000Z'))

    // 'now+1d'
    expect(operateDate('+1d', new Date('2021-01-01T00:00:00.000Z')))
      .toStrictEqual(new Date('2021-01-02T00:00:00.000Z'))

    // 'now-4d-4h'
    // 'now-4d-23h'
    // 'now-1M'
  });
});
