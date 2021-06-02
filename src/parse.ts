import { getArrayOfOperationsFromDatestring } from "./parseUtils/getArrayOfOperationsFromDatestring";
import { operateDate } from "./parseUtils/operateDate";


export function parse(datestring: string, givenNow?: Date): Date {
  const opsArray = getArrayOfOperationsFromDatestring(datestring)
  let date = givenNow || new Date()
  
  opsArray.forEach(op => {
    date = operateDate(op, date)
  })
  
  return date
}
