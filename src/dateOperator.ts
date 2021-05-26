// overall function |dateOperator| that takes Operation from Array and decides
// through CASE || SWITCH
// & returns just the string without the operator
// whether to call sub-functions |subtract| |add| |roundToClosestUnit|


export function dateOperator(operation: string, date:Date):Date { 
  if (operation[0] === '-') {
    console.log(`SUBTRACT:${operation}`)
    const removedOperator = operation.slice(1)
    const unit = operation.slice(-1)
    const quantity = operation.slice(1, -1)

    if (unit === 'd') {
      console.log('day')
      // const newDate = date
      date.setDate(date.getDate() - parseInt(quantity));
      console.log('SubtractedDate')
      console.log(date.toLocaleString())
    }
    if (unit === 'M') console.log('month')
    if (unit === 'y') console.log('year')
    if (unit === 'h') console.log('hour')
    if (unit === 'm') console.log('minute')
    if (unit === 's') console.log('second')
    if (unit === 'w') console.log('week')

    console.log('---------------------')
  }

  // if (operation[0] === '+') console.log('ADD')
  // if (operation[0] === '/') console.log('ROUNDtOcLOSESTuNIT')

  return new Date()
}
