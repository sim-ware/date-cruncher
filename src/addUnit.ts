export function addUnit(date: Date, unit: string, quantity: number): Date {
  if (unit === 'd') return addDay(date, quantity)
  if (unit === 'M') return addMonth(date, quantity)
  if (unit === 'y') return addYear(date, quantity)
  if (unit === 'h') return addHours(date, quantity)
  if (unit === 'm') return addMinutes(date, quantity)
  if (unit === 's') return addSeconds(date, quantity)
  if (unit === 'w') return addWeeks(date, quantity)

  throw new Error('FAILED TO PARSE UNIT OF TIME OR UNIT OF TIME INVALID');
}

function addDay(date: Date, quantity: number):Date {
  date.setUTCDate(date.getUTCDate() + quantity);
  return date
}

function addMonth(date: Date, quantity: number):Date {
  date.setUTCMonth(date.getUTCMonth() + quantity);
  return date
}

function addYear(date: Date, quantity: number):Date {
  date.setUTCFullYear(date.getUTCFullYear() + quantity);
  return date
}

function addHours(date: Date, quantity: number):Date {
  date.setUTCHours(date.getUTCHours() + quantity);
  return date
}

function addMinutes(date: Date, quantity: number):Date {
  date.setUTCMinutes(date.getUTCMinutes() + quantity);
  return date
}

function addSeconds(date: Date, quantity: number):Date {
  date.setUTCSeconds(date.getUTCSeconds() + quantity);
  return date
}

function addWeeks(date: Date, quantity: number):Date {
  date.setUTCDate(date.getUTCDate() + quantity * 7);
  return date
}