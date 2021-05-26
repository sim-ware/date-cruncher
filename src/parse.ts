import { getArrayOfOperationsFromDatestring } from "../src/getArrayOfOperationsFromDatestring";
import { dateOperator } from "../src/dateOperator";


export function parse(datestring: string) {
  const opsArray = getArrayOfOperationsFromDatestring(datestring)
  let date = new Date()
  
  opsArray.forEach(op => {
    date = dateOperator(op, date)
  })
  
  return datestring
}
