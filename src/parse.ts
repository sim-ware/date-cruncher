import { getArrayOfOperationsFromDatestring } from "./parseUtils/getArrayOfOperationsFromDatestring";
import { operateDate } from "./parseUtils/operateDate";


export function parse(datestring: string) {
  const opsArray = getArrayOfOperationsFromDatestring(datestring)
  let date = new Date()
  
  opsArray.forEach(op => {
    date = operateDate(op, date)
  })
  
  return datestring
}
