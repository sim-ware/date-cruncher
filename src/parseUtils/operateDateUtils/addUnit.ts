export function addDays(date: Date, quantity: number):Date {
  date.setUTCDate(date.getUTCDate() + quantity);
  return date
}

export function addMonths(date: Date, quantity: number):Date {
  date.setUTCMonth(date.getUTCMonth() + quantity);
  return date
}

export function addYears(date: Date, quantity: number):Date {
  date.setUTCFullYear(date.getUTCFullYear() + quantity);
  return date
}

export function addHours(date: Date, quantity: number):Date {
  date.setUTCHours(date.getUTCHours() + quantity);
  return date
}

export function addMinutes(date: Date, quantity: number):Date {
  date.setUTCMinutes(date.getUTCMinutes() + quantity);
  return date
}

export function addSeconds(date: Date, quantity: number):Date {
  date.setUTCSeconds(date.getUTCSeconds() + quantity);
  return date
}

export function addWeeks(date: Date, quantity: number):Date {
  date.setUTCDate(date.getUTCDate() + quantity * 7);
  return date
}