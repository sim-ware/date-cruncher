export function roundToClosestUnit(date: Date, unit: string): Date {
  if (unit === 'd') {
    date.setUTCDate(date.getUTCDate() + Math.round(date.getUTCHours() / 24));
    date.setUTCHours(0, 0, 0, 0);
    return date
  }

  if (unit === 'M') {
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ( // Adjust for leap years
      date.getUTCFullYear() % 400 == 0 ||
      date.getUTCFullYear() % 100 != 0 && date.getUTCFullYear() % 4 == 0
    ) {
      monthLength[1] = 29;
    }

    const dateOfMonth = date.getUTCDate()
    const monthMidpoint = monthLength[date.getUTCMonth()] / 2

    if (
      dateOfMonth >= monthMidpoint ||
      monthMidpoint === 15.5 && date.getUTCDate() === 15 && date.getUTCHours() >= 12
    ) {
      date.setUTCMonth(date.getUTCMonth() + 1);
      date.setUTCDate(1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    } else {
      date.setUTCDate(1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  }

  if (unit === 'y') {
    const midYearDatestring = `${date.getUTCFullYear()}-07-01T12:00:00.000Z`
    const midYearPoint = new Date(midYearDatestring)
    const roundUp = date >= midYearPoint

    if (roundUp) {
      date = new Date(`${date.getUTCFullYear() + 1}-01-01T00:00:00.000Z`)
    } else {
      date = new Date(`${date.getUTCFullYear()}-01-01T00:00:00.000Z`)
    }

    return date
  }

  if (unit === 'h') {
    date.setUTCHours(date.getUTCHours() + Math.round(date.getUTCMinutes() / 60));
    date.setUTCMinutes(0, 0, 0);
    return date
  }

  if (unit === 'm') {
    date.setUTCMinutes(date.getUTCMinutes() + Math.round(date.getUTCSeconds() / 60));
    date.setUTCSeconds(0, 0);
    return date
  }

  if (unit === 's') {
    date.setUTCSeconds(date.getUTCSeconds() + Math.round(date.getUTCMilliseconds() / 1000), 0);
    return date
  }

  if (unit === 'w') {
    if (date.getUTCDay() === 1) {
      date.setUTCHours(0, 0, 0, 0);
      return date
    }

    if (date.getUTCDay() >= 4) { // Thurs = 4
      let nextMonday = new Date();
      nextMonday.setUTCFullYear(date.getUTCFullYear())
      nextMonday.setUTCMonth(date.getUTCMonth())
      nextMonday.setUTCDate(date.getUTCDate() + (8 - date.getUTCDay()))
      nextMonday.setUTCHours(0, 0, 0, 0);
      return nextMonday
    } else {
      let prevMonday = new Date();
      prevMonday.setUTCFullYear(date.getUTCFullYear())
      prevMonday.setUTCMonth(date.getUTCMonth())
      prevMonday.setUTCDate(date.getUTCDate() - date.getUTCDay() + 1)
      prevMonday.setUTCHours(0, 0, 0, 0);
      return prevMonday
    }
  }

  throw new Error('FAILED TO PARSE UNIT OF TIME OR UNIT OF TIME INVALID');
}