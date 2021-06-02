export function getArrayOfOperationsFromDatestring(datestring: string):string[] { 
  const dateStringWithoutNow = datestring.slice(3)
  const datestringWithCommas = dateStringWithoutNow
    .replace(/-/gi, ",-")
    .replace(/\//gi, ",/")
    .replace(/\+/gi, ",+")

  return datestringWithCommas
    .split(',')
    .filter(Boolean)
}
