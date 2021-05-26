import { getArrayOfOperationsFromDatestring } from "../src/getArrayOfOperationsFromDatestring";

export const parse = (datestring: string) => {
    // new Date()
    const opsArray = getArrayOfOperationsFromDatestring(datestring)
    return datestring 
}
