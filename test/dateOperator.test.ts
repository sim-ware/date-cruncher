import { add, subtract, roundToClosestUnit } from "../src/dateOperator";


describe("__add__", () => {
  it("should take a datestring and return a Date", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("__subtract__", () => {
  it("should take a datestring and return a Date", () => {
    expect(subtract(3, 1)).toBe(2);
  });
});

describe("__roundToClosestUnit__", () => {
  it("should take a datestring and return a Date", () => {
    expect(roundToClosestUnit(4)).toBe(4);
  });
});
