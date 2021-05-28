export function operateDate(operation: string, date:Date):Date { 
  const unit = operation.slice(-1)
  const quantity = parseInt(operation.slice(1, -1))
  
  if (operation[0] === '-') return subtract(date, unit, quantity)
  if (operation[0] === '+') return add(date, unit, quantity)
  if (operation[0] === '/') return roundToClosestUnit(date, unit)

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

export function add(date:Date, unit: string, quantity:number): Date {
  if (unit === 'd') {
    date.setDate(date.getDate() + quantity);
    return date
  }

  if (unit === 'M') {
    date.setMonth(date.getMonth() + quantity);
    return date
  }

  if (unit === 'y') {
    date.setFullYear(date.getFullYear() + quantity);
    return date
  }

  if (unit === 'h') {
    date.setHours(date.getHours() + quantity);
    return date
  }

  if (unit === 'm') {
    date.setMinutes(date.getMinutes() + quantity);
    return date
  }

  if (unit === 's') {
    date.setSeconds(date.getSeconds() + quantity);
    return date
  }

  if (unit === 'w') {
    date.setDate(date.getDate() + quantity*7);
    return date
  }

  throw new Error('FAILED TO PARSE UNIT OF TIME OR UNIT OF TIME INVALID');
}

export function roundToClosestUnit(date:Date, unit: string): Date {
  if (unit === 'd') {
    date.setDate(date.getDate() + Math.round(date.getHours()/24));
    date.setUTCHours(0, 0, 0, 0);
    return date
  }

  // if (unit === 'M') {
  // var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

  // // Adjust for leap years
  // if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
  //     monthLength[1] = 29;
  //   date.setMonth(date.getMonth() + quantity);
  //   return date
  // 
  // if the date is above the monthLength|date| / 2, then round to next month
  //  if not round to 1st of current month
  // }

  if (unit === 'y') {
    const midYearDatestring = `${date.getFullYear()}-07-01T12:00:00.000Z`
    const midYearPoint = new Date(midYearDatestring)
    const roundUp = date >= midYearPoint

    if (roundUp) {
      date = new Date(`${date.getFullYear() + 1}-01-01T00:00:00.000Z`)
    } else {
      date = new Date(`${date.getFullYear()}-01-01T00:00:00.000Z`)
    }

    return date
  }

  if (unit === 'h') {
    date.setHours(date.getHours() + Math.round(date.getMinutes()/60));
    date.setMinutes(0, 0, 0);
    return date
  }

  if (unit === 'm') {
    date.setMinutes(date.getMinutes() + Math.round(date.getSeconds()/60));
    date.setSeconds(0, 0);
    return date
  }

  if (unit === 's') {
    date.setSeconds(date.getSeconds() + Math.round(date.getMilliseconds()/1000), 0);
    return date
  }

  if (unit === 'w') {
    if (date.getDay() === 1) {
      date.setUTCHours(0, 0, 0, 0);
      return date
    }

    if (date.getDay() >= 4) { // Thurs = 4
      let nextMonday = new Date();
      nextMonday.setDate(date.getDate() + (8 - date.getDay()))
      nextMonday.setUTCHours(0, 0, 0, 0);
      return nextMonday
    } else {
      let prevMonday = new Date();
      prevMonday.setDate(date.getDate() - date.getDay() + 1)
      prevMonday.setUTCHours(0, 0, 0, 0);
      return prevMonday
    }
  }

  throw new Error('FAILED TO PARSE UNIT OF TIME OR UNIT OF TIME INVALID');
}