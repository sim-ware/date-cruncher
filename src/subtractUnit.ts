export function subtractUnit(date: Date, unit: string, quantity: number): Date {
  if (unit === 'd') return subtractDays(date, quantity)
  if (unit === 'M') return subtractMonths(date, quantity)
  if (unit === 'y') return subtractYears(date, quantity)
  if (unit === 'h') return subtractHours(date, quantity)
  if (unit === 'm') return subtractMinutes(date, quantity)
  if (unit === 's') return subtractSeconds(date, quantity)
  if (unit === 'w') return subtractWeeks(date, quantity)

  throw new Error('FAILED TO PARSE UNIT OF TIME OR UNIT OF TIME INVALID');
}

export function subtractDays(date: Date, quantity: number):Date {
  date.setUTCDate(date.getUTCDate() - quantity);
  return date
}

export function subtractMonths(date: Date, quantity: number):Date {
  date.setUTCMonth(date.getUTCMonth() - quantity);
  return date
}

export function subtractYears(date: Date, quantity: number):Date {
  date.setUTCFullYear(date.getUTCFullYear() - quantity);
  return date
}

export function subtractHours(date: Date, quantity: number):Date {
  date.setUTCHours(date.getUTCHours() - quantity);
  return date
}

export function subtractMinutes(date: Date, quantity: number):Date {
  date.setUTCMinutes(date.getUTCMinutes() - quantity);
  return date
}

export function subtractSeconds(date: Date, quantity: number):Date {
  date.setUTCSeconds(date.getUTCSeconds() - quantity);
  return date
}

export function subtractWeeks(date: Date, quantity: number):Date {
  date.setUTCDate(date.getUTCDate() - quantity * 7);
  return date
}