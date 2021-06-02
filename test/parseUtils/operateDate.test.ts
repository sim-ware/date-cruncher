import { operateDate } from "../../src/parseUtils/operateDate";


describe("__operateDate__", () => {
  it("should take a string of an Operation and a Date and apply the Operation", () => {
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
    expect(operateDate('-4d', new Date('2021-01-01T00:00:00.000Z')))
      .toStrictEqual(new Date('2020-12-28T00:00:00.000Z'))
    expect(operateDate('-4h', new Date('2021-01-01T00:00:00.000Z')))
      .toStrictEqual(new Date('2020-12-31T20:00:00.000Z'))

    // ERRORS
    expect(() => operateDate('-369x', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: UNIT OF TIME NOT RECOGNISED');
    expect(() => operateDate('+369x', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: UNIT OF TIME NOT RECOGNISED');
    expect(() => operateDate('/x', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: UNIT OF TIME NOT RECOGNISED');

    expect(() => operateDate('x369d', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: OPERATOR NOT RECOGNISED');
    expect(() => operateDate('x369M', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: OPERATOR NOT RECOGNISED');
    expect(() => operateDate('x369y', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: OPERATOR NOT RECOGNISED');
    expect(() => operateDate('x369h', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: OPERATOR NOT RECOGNISED');
    expect(() => operateDate('x369m', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: OPERATOR NOT RECOGNISED');
    expect(() => operateDate('x369s', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: OPERATOR NOT RECOGNISED');
    expect(() => operateDate('x369w', new Date('2021-01-01T00:00:00.000Z')))
      .toThrow('Error: OPERATOR NOT RECOGNISED');
    
  });
});
