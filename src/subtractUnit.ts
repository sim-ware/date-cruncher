export function subtractUnit(date: Date, unit: string, quantity: number): Date {
  if (unit === 'd') return subtractDay(date, quantity)
  if (unit === 'M') return subtractMonth(date, quantity)
  if (unit === 'y') return subtractYear(date, quantity)
  if (unit === 'h') return subtractHours(date, quantity)
  if (unit === 'm') return subtractMinutes(date, quantity)
  if (unit === 's') return subtractSeconds(date, quantity)
  if (unit === 'w') return subtractWeeks(date, quantity)

  throw new Error('FAILED TO PARSE UNIT OF TIME OR UNIT OF TIME INVALID');
}

function subtractDay(date: Date, quantity: number):Date {
  date.setUTCDate(date.getUTCDate() - quantity);
  return date
}

function subtractMonth(date: Date, quantity: number):Date {
  date.setUTCMonth(date.getUTCMonth() - quantity);
  return date
}

function subtractYear(date: Date, quantity: number):Date {
  date.setUTCFullYear(date.getUTCFullYear() - quantity);
  return date
}

function subtractHours(date: Date, quantity: number):Date {
  date.setUTCHours(date.getUTCHours() - quantity);
  return date
}

function subtractMinutes(date: Date, quantity: number):Date {
  date.setUTCMinutes(date.getUTCMinutes() - quantity);
  return date
}

function subtractSeconds(date: Date, quantity: number):Date {
  date.setUTCSeconds(date.getUTCSeconds() - quantity);
  return date
}

function subtractWeeks(date: Date, quantity: number):Date {
  date.setUTCDate(date.getUTCDate() - quantity * 7);
  return date
}