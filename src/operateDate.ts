export function operateDate(operation: string, date:Date):Date { 
  const unit = operation.slice(-1)
  const quantity = parseInt(operation.slice(1, -1))
  
  if (operation[0] === '-') return subtract(date, unit, quantity)
  // if (operation[0] === '+') return add(date, unit, quantity)
  // if (operation[0] === '/') return roundToClosestUnit(date, unit, quantity)

  throw new Error('FAILED TO PARSE OPERATOR OR OPERATOR INVALID');
}

export function subtract(date:Date, unit: string, quantity:number): Date {
  if (unit === 'd') {
    date.setDate(date.getDate() - quantity);
    return date
  }

  if (unit === 'M') {
    date.setMonth(date.getMonth() - quantity);
    return date
  }

  if (unit === 'y') {
    date.setFullYear(date.getFullYear() - quantity);
    return date
  }

  if (unit === 'h') {
    date.setHours(date.getHours() - quantity);
    return date
  }

  if (unit === 'm') {
    date.setMinutes(date.getMinutes() - quantity);
    return date
  }

  if (unit === 's') {
    date.setSeconds(date.getSeconds() - quantity);
    return date
  }

  if (unit === 'w') {
    date.setDate(date.getDate() - quantity*7);
    return date
  }

  throw new Error('FAILED TO PARSE UNIT OF TIME OR UNIT OF TIME INVALID');
}
