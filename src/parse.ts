import { getArrayOfOperationsFromDatestring } from "../src/getArrayOfOperationsFromDatestring";

export function parse(datestring: string) {
  const opsArray = getArrayOfOperationsFromDatestring(datestring)
  
  return datestring
}
