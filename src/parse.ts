import { getArrayOfOperationsFromDatestring } from "../src/getArrayOfOperationsFromDatestring";


export function parse(datestring: string) {
  const opsArray = getArrayOfOperationsFromDatestring(datestring)
  
  // let date = new Date()

  opsArray.forEach(op => {
    console.log(`OP:${op}`)
    // return version of Date with operation performed on it
    // console.log(`DATE:${date}`)
  })
  console.log(`--------------------`)
  
  return datestring
}
